import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import en from '../i18n/locales/en.json'
import nl from '../i18n/locales/nl.json'
import { SERVICE_FAQ_KEYS } from '../shared/utils/faq'

type FaqItems = Array<{ question: string; answer: string }>
const faqOf = (messages: unknown, key: string) =>
  ((messages as { faq: Record<string, { items?: FaqItems }> }).faq[key]?.items ?? []) as FaqItems

const PAGES: Record<(typeof SERVICE_FAQ_KEYS)[number], string> = {
  software: 'software-development',
  cms: 'cms-websites',
  consulting: 'it-consulting',
  support: 'it-support',
  strategy: 'digital-strategy',
}

describe('service FAQ content (NWL-016)', () => {
  for (const key of SERVICE_FAQ_KEYS) {
    describe(key, () => {
      it('has 4–6 items in both locales with equal counts', () => {
        const n = faqOf(nl, key).length
        expect(n).toBeGreaterThanOrEqual(4)
        expect(n).toBeLessThanOrEqual(6)
        expect(faqOf(en, key)).toHaveLength(n)
      })

      it('every question and answer is a non-empty string', () => {
        for (const items of [faqOf(nl, key), faqOf(en, key)]) {
          items.forEach((item) => {
            expect(item.question.trim().length).toBeGreaterThan(0)
            expect(item.answer.trim().length).toBeGreaterThan(0)
          })
        }
      })

      it('does not repeat a faq.general question', () => {
        const general = new Set(faqOf(nl, 'general').map((i) => i.question))
        faqOf(nl, key).forEach((i) => expect(general.has(i.question)).toBe(false))
      })

      it(`is rendered on /solutions/${PAGES[key]}`, () => {
        const src = readFileSync(resolve(__dirname, `../app/pages/solutions/${PAGES[key]}.vue`), 'utf8')
        expect(src).toContain(`<ServiceFaq service="${key}" />`)
      })
    })
  }
})
