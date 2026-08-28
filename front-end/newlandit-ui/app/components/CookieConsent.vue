<template>
  <Teleport to="body">
    <Transition name="banner">
      <div v-if="showBanner" class="consent-banner" role="dialog" aria-labelledby="consent-title" aria-modal="false">
        <div class="consent-inner">
          <div class="consent-text">
            <p class="consent-title" id="consent-title">{{ t('consent.title') }}</p>
            <p class="consent-body">{{ t('consent.text') }}</p>
          </div>
          <div class="consent-actions">
            <NuxtLink :to="localePath('/cookies')" class="consent-link">{{ t('consent.learnMore') }}</NuxtLink>
            <button class="btn-decline" @click="decline">{{ t('consent.decline') }}</button>
            <button class="btn-accept" @click="accept">{{ t('consent.accept') }}</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const CONSENT_KEY = 'nwl_consent'

const { t } = useI18n()
const localePath = useLocalePath()

const showBanner = ref(false)

onMounted(() => {
  if (!localStorage.getItem(CONSENT_KEY)) {
    showBanner.value = true
  }
})

function accept() {
  localStorage.setItem(CONSENT_KEY, 'accepted')
  showBanner.value = false
}

function decline() {
  localStorage.setItem(CONSENT_KEY, 'declined')
  showBanner.value = false
}
</script>

<style scoped>
.consent-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9000;
  background: rgba(4, 39, 31, 0.97);
  border-top: 1px solid rgba(74, 222, 128, 0.25);
  backdrop-filter: blur(8px);
  padding: 1rem 1.5rem;
}
.consent-inner {
  max-width: 72rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (min-width: 768px) {
  .consent-inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
.consent-text {
  flex: 1;
}
.consent-title {
  font-weight: 700;
  color: #fbf6da;
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}
.consent-body {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.85rem;
  line-height: 1.5;
}
.consent-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.consent-link {
  color: #4ade80;
  font-size: 0.85rem;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.consent-link:hover { opacity: 0.8; }
.btn-decline {
  padding: 0.5rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: rgba(255, 255, 255, 0.75);
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  transition: border-color 0.2s, color 0.2s;
}
.btn-decline:hover {
  border-color: rgba(255, 255, 255, 0.6);
  color: #fff;
}
.btn-accept {
  padding: 0.5rem 1.25rem;
  background: #22c55e;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: background 0.2s;
}
.btn-accept:hover { background: #16a34a; }

.banner-enter-active,
.banner-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.banner-enter-from,
.banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
