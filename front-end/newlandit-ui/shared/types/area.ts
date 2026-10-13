/** Solution pages that exist under /solutions/<slug>. */
export type SolutionSlug =
  | 'software-development'
  | 'cms-websites'
  | 'it-consulting'
  | 'it-support'
  | 'digital-strategy'

export interface Area {
  /** URL slug, e.g. "amsterdam-zuidoost" → /areas/amsterdam-zuidoost. */
  slug: string
  /** schema.org type used for areaServed. Use "City" for a city, "Place" for a neighbourhood/district. */
  schemaType: 'City' | 'Place'
  /** Solution pages this area page links to. */
  relatedServices: SolutionSlug[]
  /** Slugs of nearby areas to cross-link. Must exist in the registry. */
  nearby: string[]
}
