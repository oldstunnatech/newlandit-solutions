<template>
  <section class="areas-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="eyebrow-pill mb-4">{{ t('areas.index.eyebrow') }}</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 text-cream">{{ t('areas.index.heading') }}</h1>
        <p class="text-white/70 text-lg leading-relaxed">{{ t('areas.index.intro') }}</p>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <li v-for="a in areas" :key="a.slug">
          <NuxtLink :to="localePath(`/areas/${a.slug}`)" class="area-card">
            <h2 class="area-card-title">{{ t(`areas.items.${a.slug}.name`) }}</h2>
            <p class="area-card-text">{{ t(`areas.items.${a.slug}.intro`, nap) }}</p>
            <span class="area-card-link">{{ t('areas.template.viewArea', { area: t(`areas.items.${a.slug}.name`) }) }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <!-- WhatsApp FAB -->
    <a :href="whatsappHref" target="_blank" rel="noopener noreferrer" class="whatsapp-fab" :title="t('common.whatsapp')">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">{{ t('common.whatsapp') }}</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'
import { areas } from '#shared/data/areas'
import { CONTACT } from '#shared/utils/contact'

definePageMeta({ layout: 'default' })

const { t } = useI18n()
const localePath = useLocalePath()
const whatsappHref = `https://wa.me/${CONTACT.phoneHref.replace('tel:+', '')}`
const nap = { street: CONTACT.address.street }

useSeo({
  title: t('seo.areas.index.title'),
  description: t('seo.areas.index.description'),
  path: '/areas',
})
</script>

<style scoped>
.areas-page {
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

.whatsapp-fab {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  background: #25d366; color: white; border-radius: 9999px;
  padding: 0.85rem 1.25rem; display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 4px 24px rgba(37, 211, 102, 0.4); text-decoration: none;
  font-weight: 600; font-size: 0.875rem; transition: transform 0.2s, box-shadow 0.2s;
}
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); }
.whatsapp-label { display: block; }

.area-card {
  display: flex; flex-direction: column; height: 100%;
  padding: 1.75rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}
.area-card:hover { background: rgba(255, 255, 255, 0.08); transform: translateY(-3px); }
.area-card-title { font-size: 1.25rem; font-weight: 700; color: #fbf6da; margin-bottom: 0.75rem; }
.area-card-text { color: rgba(255, 255, 255, 0.7); line-height: 1.7; flex: 1; margin-bottom: 1.25rem; }
.area-card-link { color: #4ade80; font-weight: 600; font-size: 0.9rem; }

@media (prefers-reduced-motion: reduce) { .blob { animation: none; } .area-card { transition: none; } }
</style>
