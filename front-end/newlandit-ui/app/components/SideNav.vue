<template>
  <aside
    class="w-72 h-screen sticky top-0 bg-[#fbf6da] border-r border-slate-200 p-8 hidden md:flex md:flex-col"
    aria-label="Hoofd navigatie"
  >
    <div class="flex flex-col flex-1">
      <!-- logo / brand area -->
      <div class="mb-8">
        <img :src="logo" alt="Newland IT-Solutions" class="w-70 object-contain">
      </div>

      <!-- navigation -->
      <nav class="flex-1" aria-label="Primary">
        <ul class="space-y-6">
          <li v-for="nav in navItems" :key="nav.name">
            <NuxtLink
              :to="nav.href"
              class="flex items-center gap-4 text-slate-800 hover:text-emerald-800 transition-colors"
              :class="{ 'opacity-100': isActive(nav.href), 'opacity-85': !isActive(nav.href) }"
              :aria-current="isActive(nav.href) ? 'page' : false"
            >
              <Icon :name="nav.icon" class="w-6 h-6 shrink-0 text-slate-800" aria-hidden="true" />
              <span class="text-lg font-semibold">{{ nav.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { isActivePath } from '#shared/utils/navigation'
import logo from '~/assets/company_logo.png'

const route = useRoute()

const navItems = [
  { name: 'Home', href: '/', icon: 'lucide:home' },
  { name: 'Solutions', href: '/solutions', icon: 'lucide:share-2' },
  { name: 'About', href: '/about', icon: 'lucide:user' },
  { name: 'Contact', href: '/contact', icon: 'lucide:mail' },
]

const isActive = (href: string) => isActivePath(href, route.path)
</script>

<style scoped>
.opacity-85 {
  opacity: 0.85;
}
</style>
