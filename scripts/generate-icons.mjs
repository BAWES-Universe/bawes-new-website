import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

process.chdir(fileURLToPath(new URL('..', import.meta.url)))
const source = await readFile('public/images/bawes-universe-logo.svg', 'utf8')
const group = source.match(/<g id="emblem" transform="matrix\(([^)]+)\)">([\s\S]*?)<\/g>/)
assert(group, 'Expected the source emblem group and matrix transform')
const matrix = group[1].trim().split(/\s+/).map(Number)
assert.equal(matrix.length, 6)
const [a, b, c, d, e, f] = matrix
const paths = [...group[2].matchAll(/<path fill="(#[\da-f]+)" d="([^"]+)"\s*\/>/gi)]
assert.deepEqual(paths.map(p => p[1]), ['#826625', '#4D3A16', '#F47026', '#EE2528'])

// The source uses only absolute straight-line commands. Fail if that changes;
// curves need a proper curve-bound calculation, not a control-point box.
const points = []
for (const [, , data] of paths) {
  assert(!/[a-z]/i.test(data.replace(/[MLHVZ]/g, '')), 'Unsupported path command')
  const tokens = data.match(/[MLHVZ]|-?\d*\.?\d+/g)
  let x = 0, y = 0, command
  for (let i = 0; i < tokens.length;) {
    if (/^[MLHVZ]$/.test(tokens[i])) command = tokens[i++]
    if (command === 'Z') continue
    if (command === 'M' || command === 'L') { x = Number(tokens[i++]); y = Number(tokens[i++]) }
    else if (command === 'H') x = Number(tokens[i++])
    else if (command === 'V') y = Number(tokens[i++])
    assert(Number.isFinite(x) && Number.isFinite(y))
    points.push([a * x + c * y + e, b * x + d * y + f])
  }
}
const xs = points.map(p => p[0]), ys = points.map(p => p[1])
const left = Math.min(...xs), right = Math.max(...xs)
const top = Math.min(...ys), bottom = Math.max(...ys)
const cx = (left + right) / 2, cy = (top + bottom) / 2
const span = Math.max(right - left, bottom - top)
const radius = Math.max(...points.map(([x, y]) => Math.hypot(x - cx, y - cy)))
const background = '#0a0814'
const padding = 0.06
const emblem = group[0]

function svg(size, { pad = padding, opaque = false, maskable = false } = {}) {
  // Keep all vertices (and thus all straight edges) inside the safe circle,
  // with a small margin for raster antialiasing at the edge.
  const scale = maskable ? size * 0.39 / radius : size * (1 - 2 * pad) / span
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${opaque ? `<rect width="${size}" height="${size}" fill="${background}"/>` : ''}<g transform="translate(${size / 2} ${size / 2}) scale(${scale}) translate(${-cx} ${-cy})">${emblem}</g></svg>\n`
}
const render = (size, options) => sharp(Buffer.from(svg(size, options))).png().toBuffer()
for (const directory of ['public/icons', 'docs/favicon']) await mkdir(directory, { recursive: true })
await writeFile('app/icon2.svg', svg(512))
for (const [file, size, options] of [
  ['app/icon1.png', 512],
  ['app/apple-icon.png', 180, { pad: 0.14, opaque: true }],
  ['public/icons/icon-192.png', 192],
  ['public/icons/icon-512.png', 512],
  ['public/icons/icon-maskable-512.png', 512, { maskable: true, opaque: true }],
]) await writeFile(file, await render(size, options))

// Classic 32-bit DIB frames + AND masks for broad ICO compatibility.
const sizes = [16, 32, 48]
const frames = []
for (const size of sizes) {
  const png = await render(size)
  await writeFile(`docs/favicon/icon-${size}.png`, png)
  const rgba = await sharp(png).ensureAlpha().raw().toBuffer()
  const maskStride = Math.ceil(size / 32) * 4
  const dib = Buffer.alloc(40 + size * size * 4 + maskStride * size)
  dib.writeUInt32LE(40, 0)
  dib.writeInt32LE(size, 4)
  dib.writeInt32LE(size * 2, 8)
  dib.writeUInt16LE(1, 12)
  dib.writeUInt16LE(32, 14)
  dib.writeUInt32LE(size * size * 4 + maskStride * size, 20)
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const src = (y * size + x) * 4
    const dst = 40 + ((size - 1 - y) * size + x) * 4
    dib[dst] = rgba[src + 2]; dib[dst + 1] = rgba[src + 1]
    dib[dst + 2] = rgba[src]; dib[dst + 3] = rgba[src + 3]
    if (rgba[src + 3] === 0) dib[40 + size * size * 4 + (size - 1 - y) * maskStride + (x >> 3)] |= 128 >> (x % 8)
  }
  frames.push(dib)
}
const header = Buffer.alloc(6 + sizes.length * 16)
header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4)
let offset = header.length
sizes.forEach((size, i) => {
  const at = 6 + i * 16
  header[at] = size; header[at + 1] = size
  header.writeUInt16LE(1, at + 4); header.writeUInt16LE(32, at + 6)
  header.writeUInt32LE(frames[i].length, at + 8); header.writeUInt32LE(offset, at + 12)
  offset += frames[i].length
})
await writeFile('app/favicon.ico', Buffer.concat([header, ...frames]))

// Review sheets include native pixels and nearest-neighbour enlargements.
async function sheet(file, title, rows) {
  const width = 960, height = 80 + rows.length * 210
  const labels = rows.map((row, i) => `<text x="24" y="${118 + i * 210}" font-size="17" fill="#cbd5e1">${row.label}</text>`).join('')
  const base = `<svg width="${width}" height="${height}"><rect width="100%" height="100%" fill="#171922"/><text x="24" y="42" font-size="25" fill="white" font-family="sans-serif">${title}</text><g font-family="sans-serif">${labels}</g></svg>`
  const composite = []
  for (const [i, row] of rows.entries()) {
    for (const [j, bg] of ['#f5f5f7', '#0a0814'].entries()) {
      const tile = await sharp({ create: { width: 320, height: 180, channels: 4, background: bg } }).png().toBuffer()
      const items = [{ input: row.png, left: 24, top: 24 }]
      if (row.zoom) items.push({ input: await sharp(row.png).resize(row.zoom, row.zoom, { kernel: 'nearest' }).toBuffer(), left: 140, top: 16 })
      composite.push({ input: await sharp(tile).composite(items).png().toBuffer(), left: 265 + j * 340, top: 70 + i * 210 })
    }
  }
  await sharp(Buffer.from(base)).composite(composite).png().toFile(file)
}
const comparisons = await Promise.all([0.04, 0.06, 0.08].flatMap(pad => [16, 32].map(async size => ({ label: `${pad * 100}% padding / ${size}px`, png: await render(size, { pad }), zoom: 128 }))))
await sheet('docs/favicon/padding-comparison.png', 'BAWES / Padding comparison — light and dark backgrounds', comparisons)
const finalRows = await Promise.all(sizes.map(async size => ({ label: `${size}px / 6% padding`, png: await render(size), zoom: 144 })))
await sheet('docs/favicon/preview.png', 'BAWES / Final favicon — actual size + enlarged pixels', finalRows)
const apple = await render(180, { pad: 0.14, opaque: true })
const mask = await render(180, { maskable: true, opaque: true })
const circle = Buffer.from('<svg width="180" height="180"><circle cx="90" cy="90" r="90" fill="white"/></svg>')
const rounded = Buffer.from('<svg width="180" height="180"><rect width="180" height="180" rx="44" fill="white"/></svg>')
const phoneImages = [apple, await sharp(mask).composite([{ input: circle, blend: 'dest-in' }]).png().toBuffer(), await sharp(mask).composite([{ input: rounded, blend: 'dest-in' }]).png().toBuffer()]
await sharp(Buffer.from('<svg width="720" height="280"><rect width="720" height="280" fill="#202330"/><g fill="white" font-size="16" font-family="sans-serif"><text x="30" y="35">Apple / 180px</text><text x="270" y="35">Maskable / circle</text><text x="510" y="35">Maskable / rounded</text></g></svg>')).composite(phoneImages.map((input, i) => ({ input, left: 30 + i * 240, top: 65 }))).png().toFile('docs/favicon/home-screen-preview.png')
console.log(`Generated icons from ${paths.length} original paths; ${padding * 100}% favicon padding. Maskable safe radius: 39%.`)
