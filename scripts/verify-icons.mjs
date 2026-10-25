import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import sharp from 'sharp'

const base = process.argv[2] || 'http://localhost:3000'
const urls = new Map()
for (const route of ['/', '/work']) {
  const response = await fetch(new URL(route, base))
  assert.equal(response.status, 200, route)
  const html = await response.text()
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1]
  assert(head, `${route}: missing head`)
  const links = [...head.matchAll(/<link\b[^>]*>/g)].map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value.replaceAll('&amp;', '&')])))
  const relevant = links.filter(link => ['icon', 'apple-touch-icon', 'manifest'].includes(link.rel))
  assert.equal(relevant.length, 5, `${route}: unexpected icon declarations`)
  const expected = new Map([
    ['/favicon.ico', 'icon'], ['/icon2.svg', 'icon'], ['/icon1.png', 'icon'],
    ['/apple-icon.png', 'apple-touch-icon'], ['/manifest.webmanifest', 'manifest'],
  ])
  for (const link of relevant) {
    const url = new URL(link.href, base)
    assert.equal(link.rel, expected.get(url.pathname), `Unexpected or duplicate ${url.pathname}`)
    expected.delete(url.pathname)
    if (url.pathname === '/icon2.svg') { assert.equal(link.type, 'image/svg+xml'); assert.equal(link.sizes, 'any') }
    if (url.pathname === '/icon1.png') assert.equal(link.sizes, '512x512')
    if (url.pathname === '/apple-icon.png') assert.equal(link.sizes, '180x180')
    urls.set(url.pathname, url)
  }
  assert.equal(expected.size, 0)
  assert(!relevant.some(link => link.href.includes('bawes-logo.png')))
  assert.match(head, /<meta name="theme-color" content="#0a0814"/)
  console.log(`${route}: exactly 3 browser icons, 1 Apple icon and 1 manifest; theme colour correct`)
}
for (const [pathname, url] of urls) {
  const response = await fetch(url)
  assert.equal(response.status, 200, pathname)
  const type = response.headers.get('content-type')
  if (pathname.endsWith('.png')) assert.match(type, /^image\/png/)
  else if (pathname.endsWith('.svg')) assert.match(type, /^image\/svg\+xml/)
  else if (pathname.endsWith('.ico')) assert.match(type, /^image\/(x-icon|vnd.microsoft.icon)/)
  else assert.match(type, /^application\/manifest\+json/)
  console.log(`${pathname}: 200, ${type}`)
}
const manifest = await (await fetch(urls.get('/manifest.webmanifest'))).json()
assert.equal(manifest.icons.length, 3)
assert.equal(manifest.start_url, '/')
assert.equal(manifest.scope, '/')
for (const icon of manifest.icons) {
  const response = await fetch(new URL(icon.src, base))
  assert.equal(response.status, 200)
  assert.match(response.headers.get('content-type'), /^image\/png/)
  const bytes = Buffer.from(await response.arrayBuffer())
  const meta = await sharp(bytes).metadata()
  assert.equal(`${meta.width}x${meta.height}`, icon.sizes)
  assert.equal(icon.purpose, icon.src.includes('maskable') ? 'maskable' : 'any')
  console.log(`${icon.src}: 200, ${icon.sizes}, ${icon.purpose}`)
}

// Inspect the actual ICO frames, including stored pixel orientation and alpha.
const ico = await readFile('app/favicon.ico')
assert.equal(ico.readUInt16LE(0), 0)
assert.equal(ico.readUInt16LE(2), 1)
assert.equal(ico.readUInt16LE(4), 3)
for (const [i, size] of [16, 32, 48].entries()) {
  const at = 6 + i * 16, offset = ico.readUInt32LE(at + 12)
  assert.equal(ico[at], size); assert.equal(ico[at + 1], size)
  assert.equal(ico.readUInt16LE(at + 6), 32)
  assert.equal(ico.readUInt32LE(offset), 40)
  assert.equal(ico.readInt32LE(offset + 8), size * 2)
  const expected = await sharp(`docs/favicon/icon-${size}.png`).ensureAlpha().raw().toBuffer()
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const src = offset + 40 + ((size - 1 - y) * size + x) * 4
    const dst = (y * size + x) * 4
    assert.deepEqual([ico[src + 2], ico[src + 1], ico[src], ico[src + 3]], [...expected.subarray(dst, dst + 4)])
  }
}
for (const [file, size, opaque] of [
  ['app/icon1.png', 512, false], ['app/apple-icon.png', 180, true],
  ['public/icons/icon-192.png', 192, false], ['public/icons/icon-512.png', 512, false],
  ['public/icons/icon-maskable-512.png', 512, true],
]) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  assert.equal(info.width, size); assert.equal(info.height, size)
  let transparent = 0
  for (let i = 3; i < data.length; i += 4) {
    if (opaque) assert.equal(data[i], 255, `${file}: must be fully opaque`)
    else if (data[i] === 0) transparent++
    if (file.includes('maskable') && !data.subarray(i - 3, i).equals(Buffer.from([10, 8, 20]))) {
      const pixel = (i - 3) / 4
      assert(Math.hypot(pixel % size + 0.5 - size / 2, Math.floor(pixel / size) + 0.5 - size / 2) <= size * 0.4, 'Emblem outside safe circle')
    }
  }
  if (!opaque) assert(transparent > 0)
}
console.log('Verified ICO 16/32/48 pixel data, PNG dimensions, transparency, and circular maskable safe zone.')
