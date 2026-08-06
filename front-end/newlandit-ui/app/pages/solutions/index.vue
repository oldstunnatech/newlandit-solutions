<template>
  <section class="solutions-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="eyebrow-pill mb-4">{{ t('solutions.eyebrow') }}</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6">{{ t('solutions.heading') }}</h1>
        <p class="text-white/70 text-lg leading-relaxed">
          {{ t('solutions.intro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(card, i) in cards"
          :key="card.slug"
          :to="localePath(`/solutions/${card.slug}`)"
          class="solution-card fade-in-up"
          :style="`animation-delay: ${i * 0.12}s`"
        >
          <div class="solution-icon">
            <component :is="card.icon" :size="28" :stroke-width="1.5" class="text-green-300" />
          </div>
          <h3 class="text-xl font-bold mt-5 mb-3">{{ card.title }}</h3>
          <p class="text-white/65 text-sm leading-relaxed mb-5">{{ card.summary }}</p>
          <span class="solution-link">{{ t('solutions.learnMore') }}</span>
        </NuxtLink>
      </div>
    </div>

    <div class="relative z-10 py-20 px-6 text-center border-t border-white/10">
      <div class="max-w-2xl mx-auto">
        <p class="text-white/80 text-lg mb-8">
          {{ t('solutions.ctaText') }}
        </p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary">{{ t('common.cta.contactUs') }}</NuxtLink>
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
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'
import { CodeIcon, HeadsetIcon, CompassIcon } from '@lucide/vue'

definePageMeta({
  layout: 'default',
})

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

useSeo({
  title: t('seo.solutions.title'),
  description: t('seo.solutions.description'),
  path: '/solutions',
})

const cardMeta = [
  { slug: 'software-development', icon: CodeIcon },
  { slug: 'it-consulting', icon: HeadsetIcon },
  { slug: 'digital-strategy', icon: CompassIcon },
]
const cards = computed(() =>
  (tm('solutions.cards') as any[]).map((c, i) => ({
    slug: cardMeta[i].slug,
    icon: cardMeta[i].icon,
    title: rt(c.title),
    summary: rt(c.summary),
  })),
)
</script>

<style scoped>

.text-4xl{
  color: #FBF6DA;
}

.text-xl{
  color: #FBF6DA;
}

.solutions-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: 0.3;
  animation: blobFloat 8s ease-in-out infinite;
}
.blob-1 { width: 450px; height: 450px; background: radial-gradient(circle, #1d8044, #0d4226); top: -120px; right: -100px; }
.blob-2 { width: 350px; height: 350px; background: radial-gradient(circle, #22c55e, #156534); bottom: -100px; left: -80px; animation-delay: 3s; }
@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}
.eyebrow-pill {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.95rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
  padding: 0.4rem 1.1rem;
}
.solution-card {
  display: block;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}
.solution-card:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-5px); }
.solution-icon {
  width: 56px; height: 56px;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.solution-link { color: #4ade80; font-weight: 600; font-size: 0.9rem; }
.btn-primary {
  display: inline-block; padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
}

.whatsapp-fab {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  background: #25d366; color: white;
  border-radius: 9999px;
  padding: 0.85rem 1.25rem;
  display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 4px 24px rgba(37,211,102,0.4);
  text-decoration: none; font-weight: 600; font-size: 0.875rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 32px rgba(37,211,102,0.5); }
.whatsapp-label { display: block; }


.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); }
.fade-in-up { opacity: 0; transform: translateY(24px); animation: fadeInUp 0.6s ease forwards; }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

@media (prefers-reduced-motion: reduce) {
  .blob { animation: none; }
  .fade-in-up { animation: none; opacity: 1; transform: none; }
}
</style>
