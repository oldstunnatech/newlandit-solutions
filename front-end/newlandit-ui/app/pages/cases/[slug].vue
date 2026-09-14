<template>
  <section class="case-detail-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink :to="localePath('/cases')" class="back-link">{{ t('cases.backToCases') }}</NuxtLink>

      <!-- Not found -->
      <div v-if="!caseStudy" class="not-found">
        <h1 class="text-3xl font-extrabold text-cream mb-4">{{ t('cases.notFound.heading') }}</h1>
        <p class="text-white/65 mb-8">{{ t('cases.notFound.text') }}</p>
        <NuxtLink :to="localePath('/cases')" class="btn-primary">{{ t('cases.backToCases') }}</NuxtLink>
      </div>

      <!-- Case detail -->
      <template v-else>
        <!-- Hero -->
        <div class="case-hero mb-12">
          <p class="eyebrow-pill mb-4">{{ caseStudy.client }}</p>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-cream mb-4">{{ caseStudy.title }}</h1>
          <p class="text-white/70 text-lg leading-relaxed mb-6">{{ caseStudy.summary }}</p>
          <div v-if="caseStudy.tags.length" class="flex flex-wrap gap-2">
            <span v-for="tag in caseStudy.tags" :key="tag" class="case-tag">{{ tag }}</span>
          </div>
        </div>

        <!-- Hero image -->
        <div v-if="caseStudy.image" class="case-hero-image mb-12">
          <img :src="caseStudy.image" :alt="caseStudy.title" class="hero-img" />
        </div>

        <!-- Challenge / Solution / Result -->
        <div class="case-sections">
          <div class="case-section">
            <div class="section-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            <div>
              <h2 class="section-heading">{{ t('cases.challenge') }}</h2>
              <p class="section-text">{{ caseStudy.challenge }}</p>
            </div>
          </div>

          <div class="case-section">
            <div class="section-icon section-icon--green" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>
            <div>
              <h2 class="section-heading">{{ t('cases.solution') }}</h2>
              <p class="section-text">{{ caseStudy.solution }}</p>
            </div>
          </div>

          <div class="case-section">
            <div class="section-icon section-icon--gold" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
              </svg>
            </div>
            <div>
              <h2 class="section-heading">{{ t('cases.result') }}</h2>
              <p class="section-text">{{ caseStudy.result }}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="case-cta">
          <h2 class="text-2xl font-bold text-cream mb-4">{{ t('cases.cta.heading') }}</h2>
          <p class="text-white/65 mb-6">{{ t('cases.cta.text') }}</p>
          <NuxtLink :to="localePath('/contact')" class="btn-primary">{{ t('common.cta.intro') }}</NuxtLink>
        </div>
      </template>
    </div>

    <!-- WhatsApp FAB -->
    <a href="https://wa.me/31648364450" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">{{ t('common.whatsapp') }}</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useI18n, useLocalePath } from '#imports'
import { getCaseBySlug } from '#shared/data/cases'

definePageMeta({ layout: 'default' })

const route = useRoute()
const { t } = useI18n()
const localePath = useLocalePath()

const slug = computed(() => String(route.params.slug))
const caseStudy = computed(() => getCaseBySlug(slug.value))

useSeo({
  title: caseStudy.value
    ? `${caseStudy.value.title} — ${caseStudy.value.client}`
    : t('seo.cases.title'),
  description: caseStudy.value?.summary ?? t('seo.cases.description'),
  path: `/cases/${slug.value}`,
  noindex: !caseStudy.value,
})
</script>

<style scoped>
.case-detail-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}

.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; animation: blobFloat 8s ease-in-out infinite; }
.blob-1 { width: 450px; height: 450px; background: radial-gradient(circle, #1d8044, #0d4226); top: -120px; right: -100px; }
.blob-2 { width: 350px; height: 350px; background: radial-gradient(circle, #22c55e, #156534); bottom: -100px; left: -80px; animation-delay: 3s; }

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}

.back-link {
  display: inline-block; color: #4ade80; font-weight: 600;
  font-size: 0.9rem; text-decoration: none; margin-bottom: 2.5rem;
}
.back-link:hover { text-decoration: underline; }

.text-cream { color: #fbf6da; }

.eyebrow-pill {
  display: inline-block; text-transform: uppercase; letter-spacing: 0.15em;
  font-size: 0.95rem; font-weight: 700; color: #4ade80;
  background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px; padding: 0.4rem 1.1rem;
}

.case-tag {
  font-size: 0.7rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 9999px;
  background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(74, 222, 128, 0.25);
  color: #4ade80; text-transform: uppercase; letter-spacing: 0.05em;
}

.case-hero-image { border-radius: 1.25rem; overflow: hidden; }
.hero-img { width: 100%; height: 400px; object-fit: cover; display: block; }

.case-sections {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 4rem;
}

.case-section {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 1rem;
}

.section-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255, 255, 255, 0.5);
}

.section-icon--green { background: rgba(34, 197, 94, 0.1); border-color: rgba(74, 222, 128, 0.25); color: #4ade80; }
.section-icon--gold  { background: rgba(251, 191, 36, 0.1); border-color: rgba(251, 191, 36, 0.25); color: #fbbf24; }

.section-heading { font-size: 1.125rem; font-weight: 700; color: #fbf6da; margin-bottom: 0.5rem; }
.section-text { font-size: 0.9375rem; color: rgba(255, 255, 255, 0.7); line-height: 1.75; }

.case-cta {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
}

.not-found { padding: 4rem 0; text-align: center; }

.btn-primary {
  display: inline-block; padding: 0.75rem 2rem;
  background: #fbf6da; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem; text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); }

.whatsapp-fab {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  background: #25d366; color: white; border-radius: 9999px;
  padding: 0.85rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 4px 24px rgba(37, 211, 102, 0.4); text-decoration: none;
  font-weight: 600; font-size: 0.875rem; transition: transform 0.2s, box-shadow 0.2s;
}
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); }
.whatsapp-label { display: block; }

@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
