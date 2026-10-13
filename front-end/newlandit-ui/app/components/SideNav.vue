<template>
  <aside
    class="w-56 h-screen sticky top-0 bg-[#fbf6da] border-r border-slate-200 p-6 hidden md:flex md:flex-col sidebar-slide"
    :aria-label="t('nav.primary')"
  >
    <div class="flex flex-col flex-1">
      <!-- logo / brand area -->
      <div class="mb-6">
        <NuxtLink :to="localePath('/')" aria-label="Newland IT-Solutions" class="block">
          <img :src="logo" alt="Newland IT-Solutions" class="w-full object-contain">
        </NuxtLink>
      </div>

      <!-- navigation -->
      <nav class="flex-1" :aria-label="t('nav.primary')">
        <ul class="space-y-5">
          <li
            v-for="nav in navItems"
            :key="nav.name"
            class="nav-item"
            @mouseenter="!isAlwaysOpen(nav.name) && nav.children && (openMenu = nav.name)"
            @mouseleave="!isAlwaysOpen(nav.name) && nav.children && (openMenu = null)"
            @focusin="!isAlwaysOpen(nav.name) && nav.children && (openMenu = nav.name)"
            @focusout="!isAlwaysOpen(nav.name) && onNavFocusOut($event, nav.name)"
          >
            <NuxtLink
              :to="nav.href"
              class="flex items-center justify-between gap-3 text-slate-800 hover:text-emerald-800 transition-colors"
              :class="{ 'opacity-100': isActive(nav.href), 'opacity-85': !isActive(nav.href) }"
              :aria-current="isActive(nav.href) ? 'page' : false"
              :aria-expanded="nav.children ? (isAlwaysOpen(nav.name) || openMenu === nav.name) : undefined"
            >
              <span class="flex items-center gap-3">
                <Icon :name="nav.icon" class="w-5 h-5 shrink-0 text-slate-800" aria-hidden="true" />
                <span class="text-base font-semibold">{{ nav.name }}</span>
              </span>
              <Icon
                v-if="nav.children && !isAlwaysOpen(nav.name)"
                name="lucide:chevron-right"
                class="w-3 h-3 shrink-0 text-slate-500 transition-transform"
                :class="{ 'rotate-90': openMenu === nav.name }"
                aria-hidden="true"
              />
            </NuxtLink>

            <!-- Level 2 submenu — always visible for Solutions -->
            <ul
              v-if="nav.children"
              v-show="isAlwaysOpen(nav.name) || openMenu === nav.name"
              class="submenu"
            >
              <li v-for="child in nav.children" :key="child.name">
                <div
                  @mouseenter="child.children && (openSubmenu = child.name)"
                  @mouseleave="child.children && (openSubmenu = null)"
                  @focusin="child.children && (openSubmenu = child.name)"
                  @focusout="onSubmenuFocusOut($event, child.name)"
                >
                  <NuxtLink :to="child.href" class="submenu-link flex items-center justify-between">
                    <span>{{ child.name }}</span>
                    <Icon
                      v-if="child.children"
                      name="lucide:chevron-right"
                      class="submenu-chevron w-3 h-3 text-slate-400 transition-transform"
                      :class="{ 'rotate-90': openSubmenu === child.name }"
                    />
                  </NuxtLink>

                  <!-- Level 3 — still hover-only -->
                  <ul
                    v-if="child.children"
                    v-show="openSubmenu === child.name"
                    class="submenu submenu--nested"
                  >
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
import { useI18n, useLocalePath } from '#imports'
import { useNav } from '~/composables/useNav'
import logo from '~/assets/company_logo.png'

const { t } = useI18n()
const localePath = useLocalePath()
const { navItems, isActive } = useNav()
const openMenu    = ref<string | null>(null)
const openSubmenu = ref<string | null>(null)

/** Only the direct children of Solutions are always shown; grandchildren still use hover */
function isAlwaysOpen(name: string) {
  return name === t('nav.solutions')
}

function onNavFocusOut(event: FocusEvent, name: string) {
  const related = event.relatedTarget as Node | null
  const container = event.currentTarget as HTMLElement
  if (!related || !container.contains(related)) {
    if (openMenu.value === name) openMenu.value = null
  }
}
function onSubmenuFocusOut(event: FocusEvent, name: string) {
  const related = event.relatedTarget as Node | null
  const container = event.currentTarget as HTMLElement
  if (!related || !container.contains(related)) {
    if (openSubmenu.value === name) openSubmenu.value = null
  }
}
</script>

<style scoped>
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-100%); clip-path: inset(0 0 100% 0); }
  60%  { opacity: 1; clip-path: inset(0 0 0% 0); }
  to   { opacity: 1; transform: translateY(0);    clip-path: inset(0 0 0% 0); }
}

.sidebar-slide {
  animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
  transform-origin: top left;
}

.opacity-85 { opacity: 0.85; }
.nav-item { position: relative; }

.submenu {
  list-style: none;
  margin-top: 0.4rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-left: 2px solid rgba(6, 78, 59, 0.15);
  padding-left: 0.6rem;
}
.submenu--nested {
  margin-top: 0.3rem;
  margin-left: 0.85rem;
  border-left: 2px solid rgba(6, 78, 59, 0.08);
  padding-left: 0.65rem;
}
.submenu-link {
  position: relative;
  display: block;
  padding-right: 1rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(30, 41, 59, 0.75);
  text-decoration: none;
  transition: color 0.15s;
}
.submenu-link:hover { color: #065f46; }
/* Pinned to the right edge so every chevron lines up, whatever the label width */
.submenu-chevron {
  position: absolute;
  right: 0;
  top: 0.35rem;
}
.submenu-link--small { font-size: 0.78rem; color: rgba(30, 41, 59, 0.6); }
.submenu-link--small:hover { color: #065f46; }
</style>
