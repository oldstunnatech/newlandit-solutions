export default defineNuxtConfig({
  compatibilityDate: '2026-06-17',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxtjs/i18n'],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'nl',
    locales: [
      { code: 'nl', language: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    // Dutch is the primary market — do not auto-redirect based on browser.
    detectBrowserLanguage: false,
    baseUrl: process.env.SITE_URL || 'https://www.newlandit-solutions.com',
  },

  app: {
    head: {
      // Locale <html lang> + hreflang are set per-request via useLocaleHead
      // in the default layout. This is the no-JS/first-paint fallback.
      htmlAttrs: { lang: 'nl' },
      titleTemplate: (title?: string) =>
        title ? `${title} | Newland IT-Solutions` : 'Newland IT-Solutions | IT-bedrijf Amsterdam',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0d4226' },
        { property: 'og:site_name', content: 'Newland IT-Solutions' },
      ],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },

  routeRules: {
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      },
    },
    '/oplossingen': { redirect: { to: '/solutions', statusCode: 301 } },
    '/oplossingen/**': { redirect: { to: '/solutions', statusCode: 301 } },
    '/over-ons': { redirect: { to: '/about', statusCode: 301 } },
  },

  runtimeConfig: {
    sanityApiToken: process.env.SANITY_API_TOKEN,
    resendApiKey: process.env.RESEND_API_KEY,
    contactNotificationFrom: process.env.CONTACT_NOTIFICATION_FROM,
    contactNotificationTo: process.env.CONTACT_NOTIFICATION_TO,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,

    public: {
      sanityProjectId: process.env.SANITY_PROJECT_ID,
      sanityDataset: process.env.SANITY_DATASET || 'production',
      siteUrl: process.env.SITE_URL || 'https://www.newlandit-solutions.com',
    },
  },
})
