<template>
  <section class="approach-page relative text-white overflow-hidden">
    <!-- unified background with single green gradient -->
    <div class="bg-unified"></div>
    <!-- subtle top arc shape that connects hero to steps -->
    <div class="arc-connector"></div>

    <!-- HERO -->
    <div class="relative z-10 min-h-[45vh] flex flex-col justify-center items-center text-center px-6 pt-28 pb-12">
      <p class="eyebrow-pill mb-4">{{ t('approach.eyebrow') }}</p>
      <h1 class="hero-heading text-4xl sm:text-5xl font-extrabold leading-tight mb-5">{{ t('approach.heading') }}</h1>
      <p class="hero-sub text-lg max-w-xl mx-auto">{{ t('approach.intro') }}</p>
      <!-- scroll hint that visually bridges into the steps -->
      <div class="scroll-bridge mt-10" aria-hidden="true">
        <div class="bridge-line"></div>
        <div class="bridge-dot"></div>
      </div>
    </div>

    <!-- STEPS — unified card strip -->
    <div class="relative z-10 max-w-3xl mx-auto px-6 pb-20">
      <div class="steps-strip">
        <div
          v-for="(step, i) in steps"
          :key="step.title"
          class="step-row fade-in-up"
          :class="{ 'step-row--last': i === steps.length - 1 }"
          :style="`animation-delay: ${i * 0.1}s`"
        >
          <!-- left: number + connector line -->
          <div class="step-left">
            <div class="step-num">{{ step.number }}</div>
            <div class="step-track" v-if="i < steps.length - 1"></div>
          </div>

          <!-- right: content -->
          <div class="step-body">
            <h2 class="step-title">{{ step.title }}</h2>
            <p
              v-for="(para, pi) in step.paragraphs"
              :key="pi"
              class="step-para"
            >{{ para }}</p>
            <ul class="step-bullets">
              <li v-for="bullet in step.bullets" :key="bullet">
                <span class="check" aria-hidden="true">✓</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA — visually continuous with steps -->
    <div class="relative z-10 cta-band px-6 text-center">
      <div class="max-w-xl mx-auto py-20">
        <p class="eyebrow-pill mb-4">{{ t('approach.cta.eyebrow') }}</p>
        <h2 class="cta-heading text-3xl sm:text-4xl font-extrabold mb-5">{{ t('approach.cta.heading') }}</h2>
        <p class="hero-sub mb-8 text-lg">{{ t('approach.cta.text') }}</p>
        <NuxtLink :to="localePath('/contact')" class="btn-primary">{{ t('common.cta.intro') }}</NuxtLink>
      </div>
    </div>

    <!-- WhatsApp FAB -->
    <a :href="CONTACT.whatsappHref" target="_blank" rel="noopener noreferrer" class="whatsapp-fab" :title="t('common.whatsapp')">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">{{ t('common.whatsapp') }}</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { CONTACT } from '#shared/utils/contact'
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'

definePageMeta({ layout: 'default' })

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

useSeo({
  title: t('seo.approach.title'),
  description: t('seo.approach.description'),
  path: '/approach',
})

const steps = computed(() =>
  (tm('approach.steps') as any[]).map((s) => ({
    number: rt(s.number),
    title: rt(s.title),
    paragraphs: (s.paragraphs as any[]).map((p) => rt(p)),
    bullets: (s.bullets as any[]).map((b) => rt(b)),
  })),
)
</script>

<style scoped>
/* ── Base ── */
.approach-page {
  min-height: 100vh;
  background: #0d4226;
}

/* Single unified gradient that flows top to bottom — one continuous canvas */
.bg-unified {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg,
    #0d4226 0%,
    #115230 18%,
    #156534 38%,
    #186038 58%,
    #0f4a29 78%,
    #0a3520 100%
  );
  z-index: 0;
}

/* Subtle radial glow at top centre to make hero feel lit */
.bg-unified::after {
  content: '';
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(34,197,94,0.12) 0%, transparent 70%);
  pointer-events: none;
}

/* ── Scroll bridge — visual thread from hero into steps ── */
.scroll-bridge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}
.bridge-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, rgba(74,222,128,0.5), rgba(74,222,128,0.15));
}
.bridge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4ade80;
  opacity: 0.6;
}

/* ── Typography ── */
.eyebrow-pill {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.8rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(74, 222, 128, 0.1);
  border: 1px solid rgba(74, 222, 128, 0.25);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
}

.hero-heading { color: #fbf6da; }
.hero-sub { color: rgba(251, 246, 218, 0.65); }

/* ── Steps strip — single card that houses all steps together ── */
.steps-strip {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  padding: 2rem 2rem 0.5rem;
  backdrop-filter: blur(4px);
}

.step-row {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 0 1.25rem;
  align-items: start;
}

/* Left column: number + vertical track */
.step-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(74, 222, 128, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  color: #4ade80;
  flex-shrink: 0;
}

/* The vertical line that connects steps — gives a pipeline feel */
.step-track {
  width: 1px;
  flex: 1;
  min-height: 40px;
  background: linear-gradient(to bottom, rgba(74,222,128,0.25), rgba(74,222,128,0.08));
  margin: 6px 0;
}

/* Right column: content */
.step-body {
  padding-bottom: 2.25rem;
}

.step-row--last .step-body {
  padding-bottom: 1.5rem;
}

.step-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fbf6da;
  margin-bottom: 0.6rem;
  padding-top: 6px;
}

.step-para {
  font-size: 0.875rem;
  color: rgba(251, 246, 218, 0.6);
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.step-bullets {
  list-style: none;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.step-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: rgba(251, 246, 218, 0.8);
  font-weight: 500;
}

.check {
  color: #4ade80;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 1px;
}

/* ── CTA band — flows naturally below the steps strip ── */
.cta-band {
  background: linear-gradient(to bottom, transparent, rgba(6, 26, 15, 0.5));
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 0;
}

.cta-heading { color: #fbf6da; }

/* ── CTA button ── */
.btn-primary {
  display: inline-block;
  padding: 0.7rem 2rem;
  background: #fbf6da;
  color: #0d4226;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.btn-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.28);
}

/* ── WhatsApp FAB ── */
.whatsapp-fab {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  background: #25d366; color: white;
  border-radius: 9999px;
  padding: 0.75rem 1.1rem;
  display: flex; align-items: center; gap: 0.45rem;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  text-decoration: none; font-weight: 600; font-size: 0.85rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 8px 28px rgba(37, 211, 102, 0.5); }

/* ── Animations ── */
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.55s ease forwards;
}
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

@media (prefers-reduced-motion: reduce) {
  .fade-in-up { animation: none; opacity: 1; transform: none; }
}

/* ── Mobile ── */
@media (max-width: 640px) {
  .steps-strip { padding: 1.5rem 1.25rem 0.5rem; }
  .step-row { grid-template-columns: 40px 1fr; gap: 0 1rem; }
}
</style>
