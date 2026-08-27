export interface SitemapRoute {
  path: string
  priority: number
  changefreq: string
}

export const NL_ROUTES: SitemapRoute[] = [
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

export function buildUrlBlock(base: string, route: SitemapRoute, lastmod: string): string {
  base = base.replace(/\/+$/, '')
  const nlHref = `${base}${route.path}`
  const enHref = route.path === '/' ? `${base}/en` : `${base}/en${route.path}`
  const block = (loc: string) =>
    [
      `  <url>`,
      `    <loc>${loc}</loc>`,
      `    <xhtml:link rel="alternate" hreflang="nl" href="${nlHref}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${enHref}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${nlHref}"/>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority.toFixed(1)}</priority>`,
      `  </url>`,
    ].join('\n')
  return `${block(nlHref)}\n${block(enHref)}`
}
