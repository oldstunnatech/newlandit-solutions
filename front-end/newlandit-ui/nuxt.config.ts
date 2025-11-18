// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css:[],
    colorMode: {
        // 'system' is default; user can still override via the toggle
        preference: 'system',
        fallback: 'light',
        // Keep suffix empty so the class is `.dark`/`.light`
        classSuffix: ''
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
    ]
})