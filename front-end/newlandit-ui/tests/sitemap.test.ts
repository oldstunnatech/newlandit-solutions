import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { SITEMAP_EXCLUDE } from '../shared/utils/sitemap'

const ROOT = resolve(__dirname, '..')
const PAGES = join(ROOT, 'app/pages')

function listPages(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    return statSync(full).isDirectory() ? listPages(full) : name.endsWith('.vue') ? [full] : []
  })
}

/** app/pages/foo/index.vue → /foo, app/pages/index-v1.vue → /index-v1 */
function routeOf(file: string): string {
  const path = '/' + relative(PAGES, file).replace(/\.vue$/, '').replace(/(^|\/)index$/, '')
  return path.replace(/\/$/, '') || '/'
}

describe('sitemap config', () => {
  it('every noindex page is excluded from the sitemap', () => {
    const noindexRoutes = listPages(PAGES)
      .filter((f) => /noindex:\s*true/.test(readFileSync(f, 'utf8')))
      .map(routeOf)
    noindexRoutes.forEach((r) => expect(SITEMAP_EXCLUDE, r).toContain(r))
  })

  it('excludes admin paths', () => {
    expect(SITEMAP_EXCLUDE).toContain('/admin/**')
  })

  it('robots.txt points at the module sitemap index', () => {
    const robots = readFileSync(join(ROOT, 'public/robots.txt'), 'utf8')
    expect(robots).toMatch(/^Sitemap: https:\/\/www\.newlandit-solutions\.com\/sitemap_index\.xml$/m)
  })

  it('no custom sitemap route shadows the module', () => {
    expect(existsSync(join(ROOT, 'server/routes/sitemap.xml.ts'))).toBe(false)
  })
})
