import { describe, it, expect } from 'vitest'
import type { FaqItem } from '../app/components/FaqAccordion.vue'

function buildFaqSchema(items: FaqItem[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': pageUrl,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

const ITEMS: FaqItem[] = [
  { question: 'What do you do?', answer: 'IT solutions for SMEs in Amsterdam.' },
  { question: 'Where are you based?', answer: 'Hessenbergweg 8, 1101 BT Amsterdam.' },
]

describe('FaqAccordion JSON-LD schema', () => {
  it('builds FAQPage schema with correct @type', () => {
    const schema = buildFaqSchema(ITEMS, 'https://newlandit-solutions.com/')
    expect(schema['@type']).toBe('FAQPage')
    expect(schema['@context']).toBe('https://schema.org')
  })

  it('sets @id to the provided pageUrl', () => {
    const url = 'https://newlandit-solutions.com/solutions/software-development'
    const schema = buildFaqSchema(ITEMS, url)
    expect(schema['@id']).toBe(url)
  })

  it('maps each item to a Question entity', () => {
    const schema = buildFaqSchema(ITEMS, 'https://newlandit-solutions.com/')
    expect(schema.mainEntity).toHaveLength(2)
    expect(schema.mainEntity[0]['@type']).toBe('Question')
    expect(schema.mainEntity[0].name).toBe(ITEMS[0].question)
  })

  it('wraps answer in AcceptedAnswer', () => {
    const schema = buildFaqSchema(ITEMS, 'https://newlandit-solutions.com/')
    const first = schema.mainEntity[0]
    expect(first.acceptedAnswer['@type']).toBe('Answer')
    expect(first.acceptedAnswer.text).toBe(ITEMS[0].answer)
  })

  it('handles empty items array', () => {
    const schema = buildFaqSchema([], 'https://newlandit-solutions.com/')
    expect(schema.mainEntity).toHaveLength(0)
  })

  it('produces valid JSON (no circular refs)', () => {
    const schema = buildFaqSchema(ITEMS, 'https://newlandit-solutions.com/')
    expect(() => JSON.stringify(schema)).not.toThrow()
  })
})

describe('faq i18n keys', () => {
  it('en locale has faq.general.items', async () => {
    const en = (await import('../i18n/locales/en.json')).default
    expect(en.faq).toBeDefined()
    expect(en.faq.general.items.length).toBeGreaterThan(0)
    expect(en.faq.general.items[0]).toHaveProperty('question')
    expect(en.faq.general.items[0]).toHaveProperty('answer')
  })

  it('nl locale has faq.general.items matching en count', async () => {
    const en = (await import('../i18n/locales/en.json')).default
    const nl = (await import('../i18n/locales/nl.json')).default
    expect(nl.faq.general.items).toHaveLength(en.faq.general.items.length)
  })
})
