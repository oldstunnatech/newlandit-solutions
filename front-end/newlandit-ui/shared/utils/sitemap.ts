/**
 * Paths kept out of the @nuxtjs/sitemap output. Locale-less: the module applies
 * them to every locale variant (so '/index-v1' also drops '/en/index-v1').
 * Every page that sets `noindex: true` must be listed here (enforced in tests).
 */
export const SITEMAP_EXCLUDE = ['/admin/**', '/index-v1']
