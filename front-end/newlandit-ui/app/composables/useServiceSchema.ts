import { useHead, useRuntimeConfig, useRoute } from '#imports'
import { CONTACT } from '#shared/utils/contact'

export interface ServiceSchemaOptions {
  /** Display name of the service. */
  name: string
  /** Short description (~160 chars). */
  description: string
  /** Canonical path, e.g. "/solutions/software-development". Defaults to current route path. */
  path?: string
  /** Optional schema.org serviceType value. */
  serviceType?: string
  /** Optional schema.org areaServed override. Defaults to the City of Amsterdam. */
  areaServed?: Record<string, unknown>
}

const PROVIDER = {
  '@type': 'Organization',
  name: 'Newland IT-Solutions',
  url: CONTACT.website,
  telephone: CONTACT.phoneHref.replace(/^tel:/, ''),
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    postalCode: CONTACT.address.postalCode,
    addressLocality: CONTACT.address.city,
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
    areaServed: opts.areaServed ?? AREA_SERVED,
  }

  if (opts.serviceType) {
    schema.serviceType = opts.serviceType
  }

  useHead({
    script: [{ type: 'application/ld+json', children: JSON.stringify(schema) }],
  })
}
