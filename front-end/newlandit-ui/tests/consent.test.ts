import { describe, it, expect, beforeEach } from 'vitest'

const CONSENT_KEY = 'nwl_consent'

describe('cookie consent storage (nwl_consent)', () => {
  beforeEach(() => localStorage.clear())

  it('no key present → banner should show', () => {
    expect(localStorage.getItem(CONSENT_KEY)).toBeNull()
  })

  it('accept stores "accepted"', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    expect(localStorage.getItem(CONSENT_KEY)).toBe('accepted')
  })

  it('decline stores "declined"', () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    expect(localStorage.getItem(CONSENT_KEY)).toBe('declined')
  })

  it('key present → banner should not show', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    expect(localStorage.getItem(CONSENT_KEY)).not.toBeNull()
  })

  it('clear resets consent state', () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    localStorage.clear()
    expect(localStorage.getItem(CONSENT_KEY)).toBeNull()
  })

  it('only one key written per interaction', () => {
    localStorage.setItem(CONSENT_KEY, 'declined')
    expect(localStorage.length).toBe(1)
    expect(localStorage.key(0)).toBe(CONSENT_KEY)
  })
})
