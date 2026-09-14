import { describe, it, expect } from 'vitest'

const BASE = 'https://www.newlandit-solutions.com'

function buildBreadcrumbs(
  routePath: string,
  locale: 'nl' | 'en',
  segmentNames: Record<string, string>,
  homeName: string,
) {
  const localePrefix = locale === 'en' ? '/en' : ''
  const canonicalPath =
    localePrefix && routePath.startsWith(localePrefix)
      ? routePath.slice(localePrefix.length) || '/'
      : routePath

  const segments = canonicalPath.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const items: Array<{ name: string; url: string }> = [
    { name: homeName, url: BASE + (localePrefix || '/') },
  ]

  let cumulativePath = localePrefix
  for (const seg of segments) {
    cumulativePath += `/${seg}`
    items.push({
      name:
        segmentNames[seg] ??
        seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      url: BASE + cumulativePath,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

const NL_NAMES = { solutions: 'Diensten', 'software-development': 'Softwareontwikkeling', about: 'Over ons', contact: 'Contact' }
const EN_NAMES = { solutions: 'Solutions', 'software-development': 'Software Development', about: 'About', contact: 'Contact' }

describe('BreadcrumbList JSON-LD', () => {
  it('returns null for home path (no breadcrumb needed)', () => {
    expect(buildBreadcrumbs('/', 'nl', NL_NAMES, 'Home')).toBeNull()
  })

  it('returns null for English home path', () => {
    expect(buildBreadcrumbs('/en', 'en', EN_NAMES, 'Home')).toBeNull()
  })

  it('builds 2-item list for top-level page', () => {
    const schema = buildBreadcrumbs('/about', 'nl', NL_NAMES, 'Home')!
    expect(schema['@type']).toBe('BreadcrumbList')
    expect(schema.itemListElement).toHaveLength(2)
    expect(schema.itemListElement[0].position).toBe(1)
    expect(schema.itemListElement[0].name).toBe('Home')
    expect(schema.itemListElement[1].name).toBe('Over ons')
  })

  it('builds 3-item list for nested page', () => {
    const schema = buildBreadcrumbs('/solutions/software-development', 'nl', NL_NAMES, 'Home')!
    expect(schema.itemListElement).toHaveLength(3)
    expect(schema.itemListElement[1].name).toBe('Diensten')
    expect(schema.itemListElement[2].name).toBe('Softwareontwikkeling')
  })

  it('item URLs are absolute and correct', () => {
    const schema = buildBreadcrumbs('/solutions/software-development', 'nl', NL_NAMES, 'Home')!
    expect(schema.itemListElement[0].item).toBe(`${BASE}/`)
    expect(schema.itemListElement[1].item).toBe(`${BASE}/solutions`)
    expect(schema.itemListElement[2].item).toBe(`${BASE}/solutions/software-development`)
  })

  it('English locale includes /en prefix in URLs', () => {
    const schema = buildBreadcrumbs('/en/solutions/software-development', 'en', EN_NAMES, 'Home')!
    expect(schema.itemListElement[0].item).toBe(`${BASE}/en`)
    expect(schema.itemListElement[1].item).toBe(`${BASE}/en/solutions`)
    expect(schema.itemListElement[2].item).toBe(`${BASE}/en/solutions/software-development`)
  })

  it('positions are 1-indexed and sequential', () => {
    const schema = buildBreadcrumbs('/solutions/software-development', 'nl', NL_NAMES, 'Home')!
    schema.itemListElement.forEach((item, i) => {
      expect(item.position).toBe(i + 1)
    })
  })

  it('unknown segment gets capitalised fallback name', () => {
    const schema = buildBreadcrumbs('/cases/my-project', 'nl', NL_NAMES, 'Home')!
    expect(schema.itemListElement[1].name).toBe('Cases')
    expect(schema.itemListElement[2].name).toBe('My Project')
  })

  it('serialises to valid JSON', () => {
    const schema = buildBreadcrumbs('/solutions', 'nl', NL_NAMES, 'Home')!
    expect(() => JSON.stringify(schema)).not.toThrow()
  })
})
