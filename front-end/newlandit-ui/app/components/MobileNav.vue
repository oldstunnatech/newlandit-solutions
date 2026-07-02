<template>
  <aside
    class="w-72 h-full bg-[#fbf6da] border-r border-slate-200 p-8 flex flex-col overflow-y-auto"
    aria-label="Mobile navigatie"
  >
    <div class="flex flex-col flex-1">
      <!-- header row: logo + close -->
      <div class="flex items-center justify-between mb-8">
        <img :src="logo" alt="Newland IT-Solutions" class="h-12 object-contain" />
        <button
          @click="$emit('close')"
          class="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          aria-label="Close navigation"
        >
          <Icon name="lucide:x" class="w-5 h-5" />
        </button>
      </div>

      <!-- nav -->
      <nav class="flex-1" aria-label="Mobile primary">
        <ul class="space-y-5">
          <li v-for="nav in navItems" :key="nav.name" class="nav-item">
            <!-- item with children: tap toggles submenu -->
            <template v-if="nav.children">
              <div class="flex items-center justify-between w-full">
                <!-- navigates to solutions.vue -->
                <NuxtLink
                :to="nav.href"
                class="flex items-center gap-4 text-slate-800 hover:text-emerald-800 transition-colors flex-1"
                :class="{ 'text-emerald-800 font-bold': isActive(nav.href) }"
                :aria-current="isActive(nav.href) ? 'page' : false"
                @click="$emit('close')"
                >
                <Icon :name="nav.icon" class="w-6 h-6 shrink-0" aria-hidden="true" />
                <span class="text-lg font-semibold">{{ nav.name }}</span>
                </NuxtLink>
                
                <!-- arrow only toggles submenu -->
                <button class="p-1 rounded text-slate-500 hover:text-emerald-800 transition-colors shrink-0" @click.stop="openMenu = openMenu === nav.name ? null : nav.name"
                :aria-expanded="openMenu === nav.name"
                :aria-label="`Toggle ${nav.name} submenu`"
                >
                <Icon
                name="lucide:chevron-right"
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-90': openMenu === nav.name }"
                aria-hidden="true"
                />
                </button>
                </div>
                  
                  <!-- submenu -->
                  <ul v-show="openMenu === nav.name" class="submenu">
                    <li v-for="child in nav.children" :key="child.name">
                      <NuxtLink
                      :to="child.href"
                      class="submenu-link"
                      @click="$emit('close')" >
                      {{ child.name }}
                      </NuxtLink>
                      </li>
                      </ul>
            </template>

            <!-- simple link -->
            <NuxtLink
              v-else
              :to="nav.href"
              class="flex items-center gap-4 text-slate-800 hover:text-emerald-800 transition-colors"
              :class="{ 'text-emerald-800 font-bold': isActive(nav.href) }"
              :aria-current="isActive(nav.href) ? 'page' : false"
              @click="$emit('close')"
            >
              <Icon :name="nav.icon" class="w-6 h-6 shrink-0" aria-hidden="true" />
              <span class="text-lg font-semibold">{{ nav.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { isActivePath } from '#shared/utils/navigation'
import logo from '~/assets/company_logo.png'

defineProps<{
  navItems: Array<{
    name: string
    href: string
    icon: string
    children?: Array<{ name: string; href: string }>
  }>
}>()

defineEmits<{ close: [] }>()

const route = useRoute()
const openMenu = ref<string | null>(null)
const isActive = (href: string) => isActivePath(href, route.path)
</script>

<style scoped>
.submenu {
  list-style: none;
  margin-top: 0.5rem;
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  border-left: 2px solid rgba(6, 78, 59, 0.15);
  padding-left: 1rem;
}
.submenu-link {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(30, 41, 59, 0.75);
  text-decoration: none;
  transition: color 0.15s;
  padding: 0.2rem 0;
}
.submenu-link:hover { color: #065f46; }
</style>
