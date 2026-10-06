/** Service FAQ namespaces: `faq.<key>.items` in both locale files (NWL-016). */
export const SERVICE_FAQ_KEYS = ['software', 'cms', 'consulting', 'support', 'strategy'] as const

export type ServiceFaqKey = (typeof SERVICE_FAQ_KEYS)[number]
