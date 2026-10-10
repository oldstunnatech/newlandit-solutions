import { describe, it, expect } from 'vitest'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import en from '../i18n/locales/en.json'
import nl from '../i18n/locales/nl.json'
import { areas, getAreaBySlug, buildAreaServed, areaSitemapUrls, SOLUTION_NAV_KEYS } from '../shared/data/areas'

function get(obj: unknown, path: string): unknown {
  return path.split('.').reduce<unknown>(
    (acc, key) => (acc && typeof acc === 'object' ? (acc as Record<string, unknown>)[key] : undefined),
    obj,
  )
}

const LOCALES = { en, nl }

describe('areas registry', () => {
  it('has at least one area', () => {
    expect(areas.length).toBeGreaterThan(0)
  })

  it('slugs are unique and URL-safe', () => {
    const slugs = areas.map((a) => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    slugs.forEach((s) => expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/))
  })

  it('every related service maps to an existing solution page and nav label', () => {
    areas.forEach((a) =>
      a.relatedServices.forEach((s) => {
        expect(existsSync(resolve(__dirname, `../app/pages/solutions/${s}.vue`)), s).toBe(true)
        expect(SOLUTION_NAV_KEYS[s]).toBeDefined()
      }),
    )
  })

  it('every nearby slug exists and is not the area itself', () => {
    areas.forEach((a) =>
      a.nearby.forEach((n) => {
        expect(getAreaBySlug(n), `${a.slug} → ${n}`).toBeDefined()
        expect(n).not.toBe(a.slug)
      }),
    )
  })

  it('every area has its copy and SEO keys in both locales', () => {
    for (const [loc, messages] of Object.entries(LOCALES)) {
      areas.forEach((a) => {
        for (const key of ['name', 'intro', 'usp']) {
          expect(get(messages, `areas.items.${a.slug}.${key}`), `${loc}: areas.items.${a.slug}.${key}`).toBeTypeOf('string')
        }
        const body = get(messages, `areas.items.${a.slug}.body`)
        expect(Array.isArray(body) && body.length > 0, `${loc}: areas.items.${a.slug}.body`).toBe(true)
        expect(get(messages, `seo.areas.${a.slug}.title`), `${loc}: seo title`).toBeTypeOf('string')
        expect(get(messages, `seo.areas.${a.slug}.description`), `${loc}: seo description`).toBeTypeOf('string')
      })
    }
  })

  it('getAreaBySlug returns undefined for unknown slugs', () => {
    expect(getAreaBySlug('does-not-exist')).toBeUndefined()
  })
})

describe('buildAreaServed', () => {
  it('neighbourhood is a Place contained in Amsterdam', () => {
    const served = buildAreaServed({ slug: 'x', schemaType: 'Place', relatedServices: [], nearby: [] }, 'Zuidoost')
    expect(served['@type']).toBe('Place')
    expect(served.name).toBe('Zuidoost')
    expect(served.containedInPlace).toEqual({ '@type': 'City', name: 'Amsterdam' })
  })

  it('city has no containedInPlace', () => {
    const served = buildAreaServed({ slug: 'x', schemaType: 'City', relatedServices: [], nearby: [] }, 'Amstelveen')
    expect(served).toEqual({ '@type': 'City', name: 'Amstelveen' })
  })
})

describe('areaSitemapUrls', () => {
  it('lists every area page with i18n transform enabled', () => {
    const urls = areaSitemapUrls()
    expect(urls).toHaveLength(areas.length)
    areas.forEach((a) => expect(urls).toContainEqual({ loc: `/areas/${a.slug}`, _i18nTransform: true }))
  })
})
