import { defineEventHandler, setHeader, useRuntimeConfig } from '#imports'

const NL_ROUTES: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/solutions', priority: 0.9, changefreq: 'monthly' },
  { path: '/solutions/software-development', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/cms-websites', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/it-consulting', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/it-support', priority: 0.8, changefreq: 'monthly' },
  { path: '/solutions/digital-strategy', priority: 0.8, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'yearly' },
  { path: '/contact', priority: 0.7, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/cookies', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
]

export default defineEventHandler((event) => {
  const base = String(useRuntimeConfig().public.siteUrl || '').replace(/\/+$/, '')
  const lastmod = new Date().toISOString().split('T')[0]

  const urls = NL_ROUTES.map((r) => {
    const nlHref = `${base}${r.path}`
    const enHref = r.path === '/' ? `${base}/en` : `${base}/en${r.path}`
    return [
      `  <url>`,
      `    <loc>${nlHref}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="nl" href="${nlHref}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${enHref}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${nlHref}"/>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority.toFixed(1)}</priority>`,
      `  </url>`,
      `  <url>`,
      `    <loc>${enHref}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="nl" href="${nlHref}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${enHref}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${nlHref}"/>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${r.changefreq}</changefreq>`,
      `    <priority>${r.priority.toFixed(1)}</priority>`,
      `  </url>`,
    ].join('\n')
  }).join('\n')

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset`,
    `  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
    `  xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    urls,
    `</urlset>`,
  ].join('\n')

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
