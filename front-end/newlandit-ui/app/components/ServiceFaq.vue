<template>
  <section v-if="items.length" class="service-faq" :aria-labelledby="headingId">
    <div class="text-center mb-8">
      <p class="eyebrow-pill mb-4">{{ t('faq.eyebrow') }}</p>
      <h2 :id="headingId" class="text-2xl sm:text-3xl font-extrabold text-cream">{{ t('faq.heading') }}</h2>
    </div>
    <FaqAccordion :items="items" :page-url="pageUrl" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n, useRoute, useRuntimeConfig } from '#imports'
import type { FaqItem } from './FaqAccordion.vue'
import type { ServiceFaqKey } from '#shared/utils/faq'

const props = defineProps<{
  /** Locale namespace under `faq.<service>.items`. */
  service: ServiceFaqKey
}>()

const { t, tm, rt } = useI18n()
const route = useRoute()
const config = useRuntimeConfig()

const headingId = `faq-heading-${props.service}`

const items = computed<FaqItem[]>(() =>
  (tm(`faq.${props.service}.items`) as Array<{ question: string; answer: string }>).map((item) => ({
    question: rt(item.question),
    answer: rt(item.answer),
  })),
)

// Absolute, locale-correct URL (route.path carries the /en prefix) for the FAQPage @id.
const pageUrl = computed(() => {
  const base = String(config.public.siteUrl || '').replace(/\/+$/, '')
  return base + (route.path.replace(/\/+$/, '') || '/')
})
</script>

<style scoped>
.service-faq {
  max-width: 48rem;
  margin: 5rem auto 0;
}

.text-cream { color: #fbf6da; }

.eyebrow-pill {
  display: inline-block; text-transform: uppercase; letter-spacing: 0.15em;
  font-size: 0.95rem; font-weight: 700; color: #4ade80;
  background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px; padding: 0.4rem 1.1rem;
}
</style>
