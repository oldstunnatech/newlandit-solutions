export default defineNuxtConfig({
  compatibilityDate: '2026-06-17',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  app: {
    head: {
      // Phase 2 (i18n): switch to per-request locale + hreflang alternates.
      htmlAttrs: { lang: 'en' },
      titleTemplate: (title?: string) =>
        title ? `${title} | Newland IT-Solutions` : 'Newland IT-Solutions | IT-bedrijf Amsterdam',
      title: 'IT Solutions, Software Development & IT Support in Amsterdam',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Newland IT-Solutions helps freelancers and small businesses in Amsterdam with reliable IT support, custom software and professional websites — clear, no jargon.',
        },
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
