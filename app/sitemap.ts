import fs from 'node:fs'
import path from 'node:path'
import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/**
 * The sitemap lists every page under app/, found at build time, so a new page
 * is included without anyone having to remember to add it here.
 */

/** Addresses that redirect elsewhere (see next.config.js) and should not be listed. */
const REDIRECTED = new Set(['/market'])

function findRoutes(dir: string, base = ''): string[] {
  const routes: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // route groups "(name)" do not appear in the address; private "_name" and dynamic "[name]" folders are skipped
      if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue
      const segment = entry.name.startsWith('(') ? '' : `/${entry.name}`
      routes.push(...findRoutes(path.join(dir, entry.name), base + segment))
    } else if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
      routes.push(base || '/')
    }
  }
  return routes
}

function priorityOf(route: string): number {
  if (route === '/') return 1
  const depth = route.split('/').length - 1
  if (depth === 1) return ['/legal', '/privacy-policy', '/terms-of-use'].includes(route) ? 0.3 : 0.8
  return 0.6
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = findRoutes(path.join(process.cwd(), 'app'))
    .filter((r) => !REDIRECTED.has(r))
    .sort()
  return routes.map((route) => ({
    url: `${SITE_URL}${route === '/' ? '' : route}`,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: priorityOf(route),
  }))
}
