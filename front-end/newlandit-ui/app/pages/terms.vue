<template>
  <section class="legal-page text-white">
    <div class="max-w-3xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink :to="localePath('/privacy')" class="back-link mb-8">← {{ t('nav.privacy') }}</NuxtLink>
      <h1 class="text-3xl sm:text-4xl font-extrabold mb-2 mt-8">{{ t('legal.terms.title') }}</h1>
      <p class="text-white/40 text-sm mb-10">{{ t('legal.lastUpdated') }}</p>
      <p class="text-white/80 leading-relaxed mb-12 text-lg">{{ t('legal.terms.intro') }}</p>
      <div
        v-for="section in (tm('legal.terms.sections') as any[])"
        :key="rt(section.heading)"
        class="legal-section mb-10"
      >
        <h2 class="text-xl font-bold mb-4 text-green-300">{{ rt(section.heading) }}</h2>
        <p
          v-for="(para, i) in (section.paras as string[])"
          :key="i"
          class="text-white/75 leading-relaxed mb-3"
        >{{ rt(para) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

useSeo({
  title: t('seo.terms.title'),
  description: t('seo.terms.description'),
  path: '/terms',
})
</script>

<style scoped>
.legal-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}
.back-link {
  display: inline-block;
  color: #4ade80;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
}
.back-link:hover { text-decoration: underline; }
.legal-section {
  border-left: 2px solid rgba(74, 222, 128, 0.25);
  padding-left: 1.5rem;
}
</style>
