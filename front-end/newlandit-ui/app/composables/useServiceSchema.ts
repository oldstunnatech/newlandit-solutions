import { useHead, useRuntimeConfig, useRoute } from '#imports'

export interface ServiceSchemaOptions {
  /** Display name of the service. */
  name: string
  /** Short description (~160 chars). */
  description: string
  /** Canonical path, e.g. "/solutions/software-development". Defaults to current route path. */
  path?: string
  /** Optional schema.org serviceType value. */
  serviceType?: string
}

const PROVIDER = {
  '@type': 'Organization',
  name: 'Newland IT-Solutions',
  url: 'https://www.newlandit-solutions.com',
  telephone: '+31648364450',
  email: 'info@newlandit-solutions.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hessenbergweg 8',
    postalCode: '1101 BT',
    addressLocality: 'Amsterdam',
    addressCountry: 'NL',
  },
}

const AREA_SERVED = {
  '@type': 'City',
  name: 'Amsterdam',
}

export function useServiceSchema(opts: ServiceSchemaOptions) {
  const config = useRuntimeConfig()
  const route = useRoute()

  const base = String(config.public.siteUrl || '').replace(/\/+$/, '')
  const path = (opts.path ?? route.path).replace(/\/+$/, '') || '/'
  const url = base + path

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': url,
    name: opts.name,
    description: opts.description,
    url,
    provider: PROVIDER,
    areaServed: AREA_SERVED,
  }

  if (opts.serviceType) {
    schema.serviceType = opts.serviceType
  }

  useHead({
    script: [{ type: 'application/ld+json', children: JSON.stringify(schema) }],
  })
}
