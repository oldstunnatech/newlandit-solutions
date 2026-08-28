<template>
  <div class="lang-switch" role="group" :aria-label="t('common.langSwitch')">
    <NuxtLink
      v-for="l in locales"
      :key="l.code"
      :to="switchLocalePath(l.code)"
      class="lang-btn"
      :class="{ 'lang-btn--active': l.code === locale }"
      :aria-current="l.code === locale ? 'true' : undefined"
    >
      {{ l.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useI18n, useSwitchLocalePath } from '#imports'

const { locale, locales, t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  border: 1px solid rgba(6, 78, 59, 0.2);
  border-radius: 9999px;
  padding: 0.2rem;
}
.lang-btn {
  padding: 0.15rem 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: rgba(30, 41, 59, 0.6);
  border-radius: 9999px;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}
.lang-btn:hover {
  color: #065f46;
}
.lang-btn--active {
  background: #0d4226;
  color: #fbf6da;
}
</style>
