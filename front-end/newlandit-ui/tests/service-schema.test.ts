import { describe, it, expect } from 'vitest'

interface ServiceSchemaInput {
  name: string
  description: string
  url: string
  serviceType?: string
}

function buildServiceSchema(opts: ServiceSchemaInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': opts.url,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
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
    },
    areaServed: { '@type': 'City', name: 'Amsterdam' },
  }
  if (opts.serviceType) schema.serviceType = opts.serviceType
  return schema
}

const BASE_URL = 'https://www.newlandit-solutions.com/solutions/software-development'

describe('Service JSON-LD schema', () => {
  it('has correct @type and @context', () => {
    const s = buildServiceSchema({ name: 'Software Development', description: 'Custom software.', url: BASE_URL })
    expect(s['@type']).toBe('Service')
    expect(s['@context']).toBe('https://schema.org')
  })

  it('@id equals the page url', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL })
    expect(s['@id']).toBe(BASE_URL)
    expect(s.url).toBe(BASE_URL)
  })

  it('provider is Newland IT-Solutions Organization', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL })
    const provider = s.provider as Record<string, unknown>
    expect(provider['@type']).toBe('Organization')
    expect(provider.name).toBe('Newland IT-Solutions')
  })

  it('provider address is Amsterdam', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL })
    const addr = (s.provider as any).address
    expect(addr.addressLocality).toBe('Amsterdam')
    expect(addr.addressCountry).toBe('NL')
    expect(addr.postalCode).toBe('1101 BT')
  })

  it('areaServed is Amsterdam', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL })
    expect((s.areaServed as any).name).toBe('Amsterdam')
  })

  it('omits serviceType when not provided', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL })
    expect(s.serviceType).toBeUndefined()
  })

  it('includes serviceType when provided', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL, serviceType: 'IT Consulting' })
    expect(s.serviceType).toBe('IT Consulting')
  })

  it('serialises to valid JSON', () => {
    const s = buildServiceSchema({ name: 'X', description: 'Y', url: BASE_URL })
    expect(() => JSON.stringify(s)).not.toThrow()
  })
})
