import { defineEventHandler, setHeader, useRuntimeConfig } from '#imports'

/**
 * Static sitemap. Add new public routes here when pages are added.
 * When the i18n layer lands, emit <xhtml:link rel="alternate" hreflang> per URL.
 */
const ROUTES: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/solutions', priority: 0.9, changefreq: 'monthly' },
  { path: '/solutions/software-development', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/cms-websites', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/it-consulting', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/it-support', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/digital-strategy', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'yearly' },
  { path: '/contact', priority: 0.7, changefreq: 'yearly' },
]

export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl || '').replace(/\/+$/, '')
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = ROUTES.map(
    (r) =>
      `  <url>\n    <loc>${base}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`,
  ).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
