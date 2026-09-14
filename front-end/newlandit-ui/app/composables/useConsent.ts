const CONSENT_KEY = 'nwl_consent'

export const useConsent = () => {
  const consent = useState<'accepted' | 'declined' | null>('nwl_consent', () => null)
  const showBanner = useState<boolean>('nwl_consent_banner', () => false)

  onMounted(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as 'accepted' | 'declined' | null
    consent.value = stored ?? null
    if (!stored) showBanner.value = true
  })

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    consent.value = 'accepted'
    showBanner.value = false
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    consent.value = 'declined'
    showBanner.value = false
  }

  function openBanner() {
    showBanner.value = true
  }

  const consentAccepted = computed(() => consent.value === 'accepted')

  return { consent, consentAccepted, showBanner, accept, decline, openBanner }
}
