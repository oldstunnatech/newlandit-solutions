<template>
  <NuxtLayout>
    <section class="error-page relative text-white overflow-hidden">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>

      <div class="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-24 text-center">
        <p class="status-code mb-4">{{ statusCode }}</p>
        <h1 class="text-3xl sm:text-4xl font-extrabold text-cream mb-4">{{ t(`${copyKey}.heading`) }}</h1>
        <p class="text-white/70 text-lg leading-relaxed mb-10">{{ t(`${copyKey}.text`) }}</p>

        <div class="flex flex-wrap justify-center gap-4">
          <a :href="localePath('/')" class="btn-primary" @click.prevent="leave('/')">{{ t('error.backHome') }}</a>
          <template v-if="isNotFound">
            <a :href="localePath('/solutions')" class="btn-secondary" @click.prevent="leave('/solutions')">
              {{ t('common.cta.viewServices') }}
            </a>
            <a :href="localePath('/contact')" class="btn-secondary" @click.prevent="leave('/contact')">
              {{ t('common.cta.contactUs') }}
            </a>
          </template>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { NuxtError } from '#app'
import { clearError, useI18n, useLocalePath } from '#imports'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const localePath = useLocalePath()

const statusCode = computed(() => props.error?.statusCode ?? 500)
const isNotFound = computed(() => statusCode.value === 404)
// Never show the error's message or stack to visitors: copy is fixed per status family.
const copyKey = computed(() => (isNotFound.value ? 'error.notFound' : 'error.generic'))

useSeo({
  title: t(`${copyKey.value}.heading`),
  description: t(`${copyKey.value}.text`),
  noindex: true,
})

/** Navigating away must reset Nuxt's error state, otherwise the error page stays mounted. */
function leave(path: string) {
  clearError({ redirect: localePath(path) })
}
</script>

<style scoped>
.error-page {
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

.text-cream { color: #fbf6da; }

.status-code {
  font-size: clamp(6rem, 22vw, 14rem); line-height: 1;
  font-weight: 800; letter-spacing: 0.04em; color: #4ade80;
  text-shadow: 0 0 60px rgba(74, 222, 128, 0.35);
}

.btn-primary {
  display: inline-block; padding: 0.75rem 2rem;
  background: #fbf6da; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem; text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); }

.btn-secondary {
  display: inline-block; padding: 0.75rem 2rem;
  color: #fbf6da; font-weight: 600;
  border: 1px solid rgba(251, 246, 218, 0.4); border-radius: 0.75rem;
  text-decoration: none; transition: background 0.2s;
}
.btn-secondary:hover { background: rgba(251, 246, 218, 0.08); }

@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
