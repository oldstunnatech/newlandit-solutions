import { describe, it, expect } from 'vitest'
import en from '../i18n/locales/en.json'
import nl from '../i18n/locales/nl.json'

function collectLeafKeys(obj: unknown, prefix = ''): string[] {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return [prefix]
  }
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    collectLeafKeys(v, prefix ? `${prefix}.${k}` : k),
  )
}

describe('i18n key parity (en ↔ nl)', () => {
  const enKeys = collectLeafKeys(en).sort()
  const nlKeys = collectLeafKeys(nl).sort()

  it('nl has no missing keys compared to en', () => {
    const missing = enKeys.filter((k) => !nlKeys.includes(k))
    expect(missing, `Keys in en but not nl: ${missing.join(', ')}`).toHaveLength(0)
  })

  it('nl has no extra keys compared to en', () => {
    const extra = nlKeys.filter((k) => !enKeys.includes(k))
    expect(extra, `Keys in nl but not en: ${extra.join(', ')}`).toHaveLength(0)
  })

  it('consent.* keys exist in both locales', () => {
    const consentKeys = ['consent.title', 'consent.text', 'consent.accept', 'consent.decline', 'consent.learnMore']
    consentKeys.forEach((key) => {
      expect(enKeys).toContain(key)
      expect(nlKeys).toContain(key)
    })
  })

  it('nav.privacy/cookies/terms keys exist in both locales', () => {
    const navKeys = ['nav.privacy', 'nav.cookies', 'nav.terms']
    navKeys.forEach((key) => {
      expect(enKeys).toContain(key)
      expect(nlKeys).toContain(key)
    })
  })
})

function collectStrings(obj: unknown, prefix = ''): [string, string][] {
  if (typeof obj === 'string') return [[prefix, obj]]
  if (typeof obj !== 'object' || obj === null) return []
  return Object.entries(obj as Record<string, unknown>).flatMap(([k, v]) =>
    collectStrings(v, prefix ? `${prefix}.${k}` : k),
  )
}

describe('i18n message syntax', () => {
  // A bare "@" is vue-i18n linked-message syntax and crashes SSR at render
  // time (e.g. an email address). Write it as {'@'} instead.
  it.each([['en', en], ['nl', nl]])('%s has no unescaped @', (_locale, messages) => {
    const bad = collectStrings(messages)
      .filter(([, v]) => v.replace(/\{'@'\}/g, '').includes('@'))
      .map(([k]) => k)
    expect(bad, `Unescaped @ in: ${bad.join(', ')}`).toHaveLength(0)
  })
})
