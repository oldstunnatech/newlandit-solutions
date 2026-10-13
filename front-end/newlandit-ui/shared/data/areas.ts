import type { Area, SolutionSlug } from '../types/area'

/**
 * Local landing-page registry (SEO-009). Adding a page = add an entry here plus
 * `areas.items.<slug>.*` and `seo.areas.<slug>.*` copy in both locale files.
 * SEO-010 adds further areas.
 */
export const areas: Area[] = [
  {
    slug: 'amsterdam-zuidoost',
    schemaType: 'Place',
    relatedServices: ['it-support', 'software-development', 'cms-websites'],
    nearby: [],
  },
]

/** i18n key for each solution's display name. */
export const SOLUTION_NAV_KEYS: Record<SolutionSlug, string> = {
  'software-development': 'nav.softwareDevelopment',
  'cms-websites': 'nav.cmsWebsites',
  'it-consulting': 'nav.itConsulting',
  'it-support': 'nav.itSupport',
  'digital-strategy': 'nav.digitalStrategy',
}

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug)
}

/** schema.org areaServed value for an area. Neighbourhoods are contained in Amsterdam. */
export function buildAreaServed(area: Area, name: string): Record<string, unknown> {
  if (area.schemaType === 'City') return { '@type': 'City', name }
  return {
    '@type': 'Place',
    name,
    containedInPlace: { '@type': 'City', name: 'Amsterdam' },
  }
}

/**
 * Dynamic area routes for @nuxtjs/sitemap (not auto-discovered from pages/).
 * `_i18nTransform` makes the module emit the nl + /en variants with hreflang.
 */
export function areaSitemapUrls() {
  return areas.map((a) => ({ loc: `/areas/${a.slug}`, _i18nTransform: true }))
}
