<template>
  <header class="md:hidden sticky top-0 z-40 bg-[#fbf6da] border-b border-slate-200 px-4 py-3 flex items-center justify-between">
    <img :src="logo" alt="Newland IT-Solutions" class="h-10 object-contain" />
    <button
      @click="$emit('toggle-nav')"
      class="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
      aria-label="Open navigation"
    >
      <Icon name="lucide:menu" class="w-6 h-6" />
    </button>
  </header>
</template>

<script setup lang="ts">
import logo from '~/assets/company_logo.png'
defineEmits<{ 'toggle-nav': [] }>()
</script>
