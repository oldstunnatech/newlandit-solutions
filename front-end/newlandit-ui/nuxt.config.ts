export default defineNuxtConfig({
  compatibilityDate: '2026-06-17',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

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
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
    },
  },
})
