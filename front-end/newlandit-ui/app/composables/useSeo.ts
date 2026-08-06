import { useSeoMeta, useRuntimeConfig, useRoute } from '#imports'

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
}

/**
 * Centralised SEO head management. One call per page sets title, description,
 * Open Graph and Twitter card tags consistently.
 *
 * Canonical URL, hreflang alternates, <html lang> and og:locale are owned by
 * i18n's `useLocaleHead()` (wired in the default layout), so they are always
 * locale-correct and are intentionally NOT set here to avoid duplicate tags.
 * `route.path` already carries the /en prefix for the English locale, so the
 * og:url computed below is locale-correct for both.
 */
export function useSeo(opts: SeoOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()

  const base = String(config.public.siteUrl || '').replace(/\/+$/, '')
  const path = (opts.path ?? route.path).replace(/\/+$/, '') || '/'
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
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: image,
    robots: opts.noindex ? 'noindex, nofollow' : 'index, follow',
  })
}
