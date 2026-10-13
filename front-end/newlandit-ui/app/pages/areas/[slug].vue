<template>
  <section class="area-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink :to="localePath('/areas')" class="back-link">{{ t('areas.template.backToAreas') }}</NuxtLink>

      <!-- Hero -->
      <div class="mb-12">
        <p class="eyebrow-pill mb-4">{{ t('areas.template.eyebrow') }}</p>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-cream mb-4">{{ name }}</h1>
        <p class="text-white/70 text-lg leading-relaxed">{{ t(`areas.items.${area.slug}.intro`, nap) }}</p>
      </div>

      <!-- Body -->
      <div class="area-body mb-12">
        <p v-for="(paragraph, i) in body" :key="i" class="body-text">{{ paragraph }}</p>
        <p class="usp">{{ t(`areas.items.${area.slug}.usp`) }}</p>
      </div>

      <!-- Related services -->
      <div class="mb-12">
        <h2 class="section-heading mb-4">{{ t('areas.template.servicesHeading', { area: name }) }}</h2>
        <ul class="link-grid">
          <li v-for="service in area.relatedServices" :key="service">
            <NuxtLink :to="localePath(`/solutions/${service}`)" class="link-card">
              {{ t(SOLUTION_NAV_KEYS[service]) }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Nearby areas -->
      <div v-if="nearby.length" class="mb-12">
        <h2 class="section-heading mb-4">{{ t('areas.template.nearbyHeading') }}</h2>
        <ul class="link-grid">
          <li v-for="n in nearby" :key="n.slug">
            <NuxtLink :to="localePath(`/areas/${n.slug}`)" class="link-card">
              {{ t(`areas.items.${n.slug}.name`) }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="area-cta">
        <h2 class="text-2xl font-bold text-cream mb-4">{{ t('areas.template.ctaHeading', { area: name }) }}</h2>
        <p class="text-white/65 mb-6">{{ t('areas.template.ctaText') }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary">{{ t('common.cta.intro') }}</NuxtLink>
      </div>
    </div>

    <!-- WhatsApp FAB -->
    <a :href="CONTACT.whatsappHref" target="_blank" rel="noopener noreferrer" class="whatsapp-fab" :title="t('common.whatsapp')">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">{{ t('common.whatsapp') }}</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useI18n, useLocalePath, createError } from '#imports'
import { getAreaBySlug, buildAreaServed, SOLUTION_NAV_KEYS } from '#shared/data/areas'
import { CONTACT } from '#shared/utils/contact'

definePageMeta({ layout: 'default' })

const route = useRoute()
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()
/** Interpolation values so area copy can reference the address without hard-coding it. */
const nap = { street: CONTACT.address.street }

const found = getAreaBySlug(String(route.params.slug))
if (!found) {
  throw createError({ statusCode: 404, statusMessage: 'Area not found', fatal: true })
}
const area = found

const name = computed(() => t(`areas.items.${area.slug}.name`))
const body = computed(() => (tm(`areas.items.${area.slug}.body`) as unknown[]).map((p) => rt(p as string)))
const nearby = computed(() =>
  area.nearby.map((slug) => getAreaBySlug(slug)).filter((a): a is NonNullable<typeof a> => Boolean(a)),
)

const seoTitle = t(`seo.areas.${area.slug}.title`)
const seoDescription = t(`seo.areas.${area.slug}.description`, nap)

useSeo({
  title: seoTitle,
  description: seoDescription,
  path: `/areas/${area.slug}`,
})

useServiceSchema({
  name: seoTitle,
  description: seoDescription,
  path: `/areas/${area.slug}`,
  areaServed: buildAreaServed(area, name.value),
})
</script>

<style scoped>
.area-page {
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

.area-body {
  padding: 2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.body-text { font-size: 0.9375rem; color: rgba(255, 255, 255, 0.7); line-height: 1.75; margin-bottom: 1rem; }
.usp { font-weight: 700; color: #4ade80; }

.section-heading { font-size: 1.25rem; font-weight: 700; color: #fbf6da; }

.link-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}
.link-card {
  display: block; height: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(34, 197, 94, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.25);
  color: #fbf6da; font-weight: 600; text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}
.link-card:hover { background: rgba(34, 197, 94, 0.16); transform: translateY(-2px); }

.area-cta {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
}

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

@media (prefers-reduced-motion: reduce) { .blob { animation: none; } .link-card { transition: none; } }
</style>
