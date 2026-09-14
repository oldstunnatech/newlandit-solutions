import { useHead, useRuntimeConfig, useRoute, useI18n } from '#imports'

export function useBreadcrumbSchema() {
  const config = useRuntimeConfig()
  const route = useRoute()
  const { locale, t } = useI18n()

  const base = String(config.public.siteUrl || '').replace(/\/+$/, '')

  const localePrefix = locale.value === 'en' ? '/en' : ''
  const canonicalPath =
    localePrefix && route.path.startsWith(localePrefix)
      ? route.path.slice(localePrefix.length) || '/'
      : route.path

  const segments = canonicalPath.split('/').filter(Boolean)

  if (segments.length === 0) return

  const segmentNames: Record<string, string> = {
    solutions: t('nav.solutions'),
    'software-development': t('nav.softwareDevelopment'),
    'cms-websites': t('nav.cmsWebsites'),
    'it-consulting': t('nav.itConsulting'),
    'it-support': t('nav.itSupport'),
    'digital-strategy': t('nav.digitalStrategy'),
    about: t('nav.about'),
    contact: t('nav.contact'),
    privacy: t('nav.privacy'),
    cookies: t('nav.cookies'),
    terms: t('nav.terms'),
    cases: 'Cases',
  }

  const items: Array<{ name: string; url: string }> = [
    { name: t('nav.home'), url: base + (localePrefix || '/') },
  ]

  let cumulativePath = localePrefix
  for (const seg of segments) {
    cumulativePath += `/${seg}`
    items.push({
      name:
        segmentNames[seg] ??
        seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      url: base + cumulativePath,
    })
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      },
    ],
  })
}
