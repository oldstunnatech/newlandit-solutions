import type { CaseStudy } from '../types/case'

// NWL-013 will populate this array with real case studies.
export const cases: CaseStudy[] = []

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}
