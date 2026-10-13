import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import en from '../i18n/locales/en.json'
import nl from '../i18n/locales/nl.json'

const src = readFileSync(resolve(__dirname, '../app/error.vue'), 'utf8')
const KEYS = ['backHome', 'notFound.heading', 'notFound.text', 'generic.heading', 'generic.text']
const get = (o: unknown, path: string) =>
  path.split('.').reduce<unknown>((acc, k) => (acc as Record<string, unknown>)?.[k], o)

describe('error page (NWL-030)', () => {
  it.each(KEYS)('error.%s exists in both locales', (key) => {
    expect(get((nl as Record<string, unknown>).error, key)).toBeTypeOf('string')
    expect(get((en as Record<string, unknown>).error, key)).toBeTypeOf('string')
  })

  it('never renders the raw error message or stack', () => {
    expect(src).not.toMatch(/error\??\.(message|stack|statusMessage)/)
  })

  it('is kept out of search indexes', () => {
    expect(src).toMatch(/noindex:\s*true/)
  })

  it('resets the error state when leaving', () => {
    expect(src).toContain('clearError(')
  })

  it('renders inside the site layout', () => {
    expect(src).toContain('<NuxtLayout>')
  })
})
