import { describe, it, expect } from 'vitest'
import { NL_ROUTES, buildUrlBlock } from '../server/utils/sitemap-routes'

const BASE = 'https://newlandit-solutions.com'
const LASTMOD = '2026-08-27'

describe('sitemap routes config', () => {
  it('contains all three legal pages', () => {
    const paths = NL_ROUTES.map((r) => r.path)
    expect(paths).toContain('/privacy')
    expect(paths).toContain('/cookies')
    expect(paths).toContain('/terms')
  })

  it('legal pages have priority 0.3', () => {
    const legal = NL_ROUTES.filter((r) => ['/privacy', '/cookies', '/terms'].includes(r.path))
    legal.forEach((r) => expect(r.priority).toBe(0.3))
  })

  it('root has highest priority (1.0)', () => {
    const root = NL_ROUTES.find((r) => r.path === '/')
    expect(root?.priority).toBe(1.0)
  })
})

describe('buildUrlBlock', () => {
  it('root path: EN href is /en (not /en/)', () => {
    const root = NL_ROUTES.find((r) => r.path === '/')!
    const block = buildUrlBlock(BASE, root, LASTMOD)
    expect(block).toContain(`<loc>${BASE}/en</loc>`)
    expect(block).not.toContain(`<loc>${BASE}/en/</loc>`)
  })

  it('non-root path: EN href is /en/<path>', () => {
    const privacy = NL_ROUTES.find((r) => r.path === '/privacy')!
    const block = buildUrlBlock(BASE, privacy, LASTMOD)
    expect(block).toContain(`<loc>${BASE}/en/privacy</loc>`)
  })

  it('each block emits two <url> entries (nl + en)', () => {
    const solutions = NL_ROUTES.find((r) => r.path === '/solutions')!
    const block = buildUrlBlock(BASE, solutions, LASTMOD)
    const locCount = (block.match(/<loc>/g) || []).length
    expect(locCount).toBe(2)
  })

  it('includes hreflang nl, en, and x-default', () => {
    const contact = NL_ROUTES.find((r) => r.path === '/contact')!
    const block = buildUrlBlock(BASE, contact, LASTMOD)
    expect(block).toContain('hreflang="nl"')
    expect(block).toContain('hreflang="en"')
    expect(block).toContain('hreflang="x-default"')
  })

  it('trailing slash on base URL is stripped', () => {
    const root = NL_ROUTES.find((r) => r.path === '/')!
    const block = buildUrlBlock(`${BASE}/`, root, LASTMOD)
    // protocol // is fine; double slash in path is not
    expect(block).not.toMatch(/https?:\/\/[^/]+\/\//)
  })

  it('lastmod appears in output', () => {
    const root = NL_ROUTES.find((r) => r.path === '/')!
    const block = buildUrlBlock(BASE, root, LASTMOD)
    expect(block).toContain(`<lastmod>${LASTMOD}</lastmod>`)
  })
})
