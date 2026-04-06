export default defineNuxtConfig({
  srcDir: 'app/',
  
  modules: ["@nuxtjs/tailwindcss", "@nuxt/ui"],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})