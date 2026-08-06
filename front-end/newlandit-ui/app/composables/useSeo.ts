import { useSeoMeta, useHead, useRuntimeConfig, useRoute } from '#imports'

export interface SeoOptions {
  /** Page title (without the "| Newland IT-Solutions" suffix — that is added by titleTemplate). */
  title: string
  /** Meta description, ~150–160 chars. */
  description: string
  /** Canonical path, e.g. "/solutions". Defaults to the current route path. Always lowercased. */
  path?: string
  /** OG image path or absolute URL. Defaults to the site hero image. */
  image?: string
  /** OG type. "website" (default) or "article". */
  type?: 'website' | 'article'
  /** Set true to keep the page out of search indexes. */
  noindex?: boolean
  /**
   * Locale for og:locale. Defaults to 'nl_NL' (primary market).
   * Phase 2 (i18n) will pass the active locale here and add hreflang alternates.
   */
  locale?: string
}

/**
 * Centralised SEO head management. One call per page sets title, description,
 * canonical, Open Graph and Twitter card tags consistently.
 *
 * Bilingual-ready: when the NL/EN i18n layer lands, pass `locale` and extend
 * this helper to emit hreflang alternates. Canonical is already normalised to a
 * lowercase absolute URL so /About vs /about cannot split ranking signals.
 */
export function useSeo(opts: SeoOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()

  const base = String(config.public.siteUrl || '').replace(/\/+$/, '')
  const path = (opts.path ?? route.path).toLowerCase().replace(/\/+$/, '') || '/'
  const url = base + path

  const rawImage = opts.image ?? '/images/IMG_8959.jpg'
  const image = rawImage.startsWith('http') ? rawImage : base + rawImage

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogType: opts.type ?? 'website',
    ogUrl: url,
    ogImage: image,
    ogSiteName: 'Newland IT-Solutions',
    ogLocale: opts.locale ?? 'nl_NL',
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
    robots: opts.noindex ? 'noindex, nofollow' : 'index, follow',
  })

  useHead({
    link: [{ rel: 'canonical', href: url }],
  })
}
