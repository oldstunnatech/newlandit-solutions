<template>
  <section class="cases-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="eyebrow-pill mb-4">{{ t('cases.eyebrow') }}</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 text-cream">{{ t('cases.heading') }}</h1>
        <p class="text-white/70 text-lg leading-relaxed">{{ t('cases.intro') }}</p>
      </div>

      <!-- Case grid -->
      <div v-if="cases.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CaseCard
          v-for="c in cases"
          :key="c.slug"
          :to="localePath(`/cases/${c.slug}`)"
          :title="c.title"
          :client="c.client"
          :summary="c.summary"
          :tags="c.tags"
          :image="c.image"
          :read-more="t('cases.readMore')"
        />
      </div>

      <!-- Empty state -->
      <div v-else class="empty-state">
        <div class="empty-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h2 class="empty-heading">{{ t('cases.empty.heading') }}</h2>
        <p class="empty-text">{{ t('cases.empty.text') }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary mt-6 inline-block">
          {{ t('common.cta.contactUs') }}
        </NuxtLink>
      </div>
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
import { useI18n, useLocalePath } from '#imports'
import { cases } from '#shared/data/cases'

definePageMeta({ layout: 'default' })

const { t } = useI18n()
const localePath = useLocalePath()

useSeo({
  title: t('seo.cases.title'),
  description: t('seo.cases.description'),
  path: '/cases',
})
</script>

<style scoped>
.cases-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}

.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; animation: blobFloat 8s ease-in-out infinite; }
.blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, #1d8044, #0d4226); top: -140px; right: -120px; }
.blob-2 { width: 380px; height: 380px; background: radial-gradient(circle, #22c55e, #156534); bottom: -100px; left: -80px; animation-delay: 3s; }

@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}

.text-cream { color: #fbf6da; }

.eyebrow-pill {
  display: inline-block; text-transform: uppercase; letter-spacing: 0.15em;
  font-size: 0.95rem; font-weight: 700; color: #4ade80;
  background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px; padding: 0.4rem 1.1rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem 1rem;
  max-width: 480px;
  margin: 0 auto;
}

.empty-icon {
  color: rgba(74, 222, 128, 0.4);
  margin-bottom: 1.5rem;
}

.empty-heading {
  font-size: 1.5rem;
  font-weight: 700;
  color: #fbf6da;
  margin-bottom: 1rem;
}

.empty-text {
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1.75;
}

.btn-primary {
  padding: 0.75rem 2rem;
  background: #fbf6da;
  color: #0d4226;
  font-weight: 700;
  border-radius: 0.75rem;
  text-decoration: none;
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
