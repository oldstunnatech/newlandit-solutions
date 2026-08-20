<template>
  <aside
    class="w-72 h-screen sticky top-0 bg-[#fbf6da] border-r border-slate-200 p-8 hidden md:flex md:flex-col"
    :aria-label="t('nav.primary')"
  >
    <div class="flex flex-col flex-1">
      <!-- logo / brand area -->
      <div class="mb-8">
        <img :src="logo" alt="Newland IT-Solutions" class="w-70 object-contain">
      </div>

      <!-- navigation -->
      <nav class="flex-1" aria-label="Primary">
        <ul class="space-y-6">
          <li
            v-for="nav in navItems"
            :key="nav.name"
            class="nav-item"
            @mouseenter="nav.children && (openMenu = nav.name)"
            @mouseleave="nav.children && (openMenu = null)"
          >
            <NuxtLink
              :to="nav.href"
              class="flex items-center justify-between gap-4 text-slate-800 hover:text-emerald-800 transition-colors"
              :class="{ 'opacity-100': isActive(nav.href), 'opacity-85': !isActive(nav.href) }"
              :aria-current="isActive(nav.href) ? 'page' : false"
              :aria-expanded="nav.children ? openMenu === nav.name : undefined"
            >
              <span class="flex items-center gap-4">
                <Icon :name="nav.icon" class="w-6 h-6 shrink-0 text-slate-800" aria-hidden="true" />
                <span class="text-lg font-semibold">{{ nav.name }}</span>
              </span>
              <Icon
                v-if="nav.children"
                name="lucide:chevron-right"
                class="w-4 h-4 shrink-0 text-slate-500 transition-transform"
                :class="{ 'rotate-90': openMenu === nav.name }"
                aria-hidden="true"
              />
            </NuxtLink>

            <!-- submenu flyout -->
            <!-- Level 2 submenu -->
<ul
  v-if="nav.children"
  v-show="openMenu === nav.name"
  class="submenu"
>
  <li v-for="child in nav.children" :key="child.name">
    <div
      @mouseenter="child.children && (openSubmenu = child.name)"
      @mouseleave="child.children && (openSubmenu = null)"
    >
      <NuxtLink :to="child.href" class="submenu-link flex items-center justify-between">
        <span>{{ child.name }}</span>
        <Icon
          v-if="child.children"
          name="lucide:chevron-right"
          class="w-3 h-3 text-slate-400 transition-transform"
          :class="{ 'rotate-90': openSubmenu === child.name }"
        />
      </NuxtLink>

      <!-- Level 3 submenu -->
      <ul v-if="child.children" v-show="openSubmenu === child.name" class="submenu submenu--nested">
        <li v-for="grandchild in child.children" :key="grandchild.name">
          <NuxtLink :to="grandchild.href" class="submenu-link submenu-link--small">
            {{ grandchild.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </li>
</ul>
          </li>
        </ul>
      </nav>

      <!-- language switcher -->
      <div class="mt-6 pt-6 border-t border-slate-200">
        <LanguageSwitcher />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '#imports'
import { useNav } from '~/composables/useNav'
import logo from '~/assets/company_logo.png'

const { t } = useI18n()
const { navItems, isActive } = useNav()
const openMenu = ref<string | null>(null)
const openSubmenu = ref<string | null>(null)
</script>

<style scoped>
.opacity-85 {
  opacity: 0.85;
}

.nav-item {
  position: relative;
}

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
}

.submenu-link:hover {
  color: #065f46;
}

.submenu--nested {
  margin-top: 0.4rem;
  margin-left: 1rem;
  border-left: 2px solid rgba(6, 78, 59, 0.08);
  padding-left: 0.75rem;
}

.submenu-link--small {
  font-size: 0.8rem;
  color: rgba(30, 41, 59, 0.6);
}

.submenu-link--small:hover {
  color: #065f46;
}

</style>
