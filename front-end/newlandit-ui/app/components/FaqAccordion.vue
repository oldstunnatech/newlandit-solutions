<template>
  <div class="faq-accordion">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="faq-item"
      :class="{ 'faq-item--open': openIndex === i }"
    >
      <button
        class="faq-question"
        :aria-expanded="String(openIndex === i)"
        :aria-controls="`faq-answer-${i}`"
        type="button"
        @click="toggle(i)"
      >
        <span class="faq-question-text">{{ item.question }}</span>
        <svg
          class="faq-chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          width="20"
          height="20"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        :id="`faq-answer-${i}`"
        class="faq-body"
        role="region"
      >
        <p class="faq-answer-text">{{ item.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '#imports'

export interface FaqItem {
  question: string
  answer: string
}

interface Props {
  items: FaqItem[]
  pageUrl?: string
}

const props = defineProps<Props>()

const openIndex = ref<number | null>(null)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}

const faqSchema = computed(() => {
  if (!props.pageUrl || props.items.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': props.pageUrl,
    mainEntity: props.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
})

useHead(
  computed(() => ({
    script: faqSchema.value
      ? [{ type: 'application/ld+json', children: JSON.stringify(faqSchema.value) }]
      : [],
  })),
)
</script>

<style scoped>
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  transition: border-color 0.2s;
}

.faq-item--open {
  border-color: rgba(74, 222, 128, 0.4);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: #fbf6da;
}

.faq-question:hover {
  background: rgba(255, 255, 255, 0.04);
}

.faq-question-text {
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.4;
  flex: 1;
}

.faq-chevron {
  color: #4ade80;
  flex-shrink: 0;
  transition: transform 0.25s ease;
}

.faq-item--open .faq-chevron {
  transform: rotate(180deg);
}

.faq-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;
  overflow: hidden;
}

.faq-item--open .faq-body {
  grid-template-rows: 1fr;
}

.faq-answer-text {
  min-height: 0;
  padding: 0 1.5rem 1.25rem;
  color: rgba(251, 246, 218, 0.75);
  font-size: 0.9375rem;
  line-height: 1.75;
  margin: 0;
  overflow: hidden;
}
</style>
