<template>
  <aside
    :class="['w-48 h-full bg-[#fbf6da] border-r border-slate-200 p-4 flex flex-col overflow-y-auto', isClosing ? 'mobile-slide-out' : 'mobile-slide']"
    :aria-label="t('nav.mobile')"
  >
    <div class="flex flex-col flex-1">
      <!-- header: logo + close -->
      <div class="flex items-center justify-between mb-5">
        <NuxtLink :to="localePath('/')" aria-label="Newland IT-Solutions" @click="handleClose">
          <img :src="logo" alt="Newland IT-Solutions" class="h-8 object-contain" />
        </NuxtLink>
        <button
          @click="handleClose"
          class="p-1 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          :aria-label="t('nav.closeMenu')"
        >
          <Icon name="lucide:x" class="w-4 h-4" />
        </button>
      </div>

      <nav class="flex-1" :aria-label="t('nav.primary')">
        <ul class="space-y-3">
          <li v-for="nav in navItems" :key="nav.name" class="nav-item">

            <!-- Top-level item WITH children -->
            <template v-if="nav.children">
              <div class="flex items-center justify-between">
                <NuxtLink
                  :to="nav.href"
                  class="flex items-center gap-2 text-slate-800 hover:text-emerald-800 transition-colors flex-1"
                  :class="{ 'text-emerald-800 font-bold': isActive(nav.href) }"
                  :aria-current="isActive(nav.href) ? 'page' : false"
                  @click="handleClose"
                >
                  <Icon :name="nav.icon" class="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span class="text-xs font-semibold">{{ nav.name }}</span>
                </NuxtLink>
                <!-- Hide toggle for Solutions — it's always open -->
                <button
                  v-if="!isAlwaysOpen(nav.name)"
                  class="p-1 rounded-lg hover:bg-slate-100 transition-colors"
                  @click.stop="openMenu = openMenu === nav.name ? null : nav.name"
                  :aria-expanded="openMenu === nav.name"
                  :aria-label="t('nav.toggleSubmenu', { name: nav.name })"
                >
                  <Icon
                    name="lucide:chevron-right"
                    class="w-3 h-3 text-slate-500 transition-transform duration-200"
                    :class="{ 'rotate-90': openMenu === nav.name }"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <!-- Level 2 — always visible for Solutions -->
              <ul v-show="isAlwaysOpen(nav.name) || openMenu === nav.name" class="submenu">
                <li v-for="child in nav.children" :key="child.name">

                  <!-- Child WITH grandchildren — tap to toggle on mobile -->
                  <template v-if="child.children">
                    <div class="flex items-center justify-between">
                      <NuxtLink
                        :to="child.href"
                        class="submenu-link flex-1"
                        @click="handleClose"
                      >
                        {{ child.name }}
                      </NuxtLink>
                      <button
                        class="p-1 rounded hover:bg-slate-100 transition-colors"
                        @click.stop="openSubmenu = openSubmenu === child.name ? null : child.name"
                        :aria-label="t('nav.toggleSubmenu', { name: child.name })"
                      >
                        <Icon
                          name="lucide:chevron-right"
                          class="w-3 h-3 text-slate-400 transition-transform duration-200"
                          :class="{ 'rotate-90': openSubmenu === child.name }"
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <!-- Level 3 — tap-to-expand on mobile -->
                    <ul v-show="openSubmenu === child.name" class="submenu submenu--nested">
                      <li v-for="grandchild in child.children" :key="grandchild.name">
                        <NuxtLink
                          :to="grandchild.href"
                          class="submenu-link submenu-link--small"
                          @click="handleClose"
                        >
                          {{ grandchild.name }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </template>

                  <!-- Simple child link -->
                  <template v-else>
                    <NuxtLink
                      :to="child.href"
                      class="submenu-link"
                      @click="handleClose"
                    >
                      {{ child.name }}
                    </NuxtLink>
                  </template>

                </li>
              </ul>
            </template>

            <!-- Simple top-level link (no children) -->
            <NuxtLink
              v-else
              :to="nav.href"
              class="flex items-center gap-2 text-slate-800 hover:text-emerald-800 transition-colors"
              :class="{ 'text-emerald-800 font-bold': isActive(nav.href) }"
              :aria-current="isActive(nav.href) ? 'page' : false"
              @click="handleClose"
            >
              <Icon :name="nav.icon" class="w-4 h-4 shrink-0" aria-hidden="true" />
              <span class="text-xs font-semibold">{{ nav.name }}</span>
            </NuxtLink>

          </li>
        </ul>
      </nav>

      <!-- language switcher -->
      <div class="mt-4 pt-4 border-t border-slate-200">
        <LanguageSwitcher />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n, useLocalePath } from '#imports'
import { useNav, type NavItem } from '~/composables/useNav'
import logo from '~/assets/company_logo.png'

defineProps<{ navItems: NavItem[] }>()

const emit = defineEmits<{ close: [] }>()

const { t } = useI18n()
const localePath = useLocalePath()
const { isActive } = useNav()
const openMenu    = ref<string | null>(null)
const openSubmenu = ref<string | null>(null)
const isClosing   = ref(false)

/** Only the direct children of Solutions are always shown; grandchildren still tap-to-expand */
function isAlwaysOpen(name: string) {
  return name === t('nav.solutions')
}

function handleClose() {
  isClosing.value = true
  setTimeout(() => {
    isClosing.value = false
    emit('close')
  }, 320)
}
</script>

<style scoped>
@keyframes slideDown {
  0%   { opacity: 0; transform: translateY(-100%); clip-path: inset(0 0 100% 0); }
  60%  { opacity: 1; clip-path: inset(0 0 0% 0); }
  100% { opacity: 1; transform: translateY(0);    clip-path: inset(0 0 0% 0); }
}
@keyframes slideUp {
  0%   { opacity: 1; transform: translateY(0);    clip-path: inset(0 0 0% 0); }
  50%  { clip-path: inset(0 0 100% 0); }
  100% { opacity: 0; transform: translateY(-100%); clip-path: inset(0 0 100% 0); }
}

.mobile-slide     { animation: slideDown 0.45s cubic-bezier(0.22, 1, 0.36, 1) both; transform-origin: top left; }
.mobile-slide-out { animation: slideUp   0.32s cubic-bezier(0.55, 0, 0.7,  0) both; transform-origin: top left; }

.submenu {
  list-style: none;
  margin-top: 0.35rem;
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-left: 2px solid rgba(6, 78, 59, 0.15);
  padding-left: 0.7rem;
}
.submenu--nested {
  margin-top: 0.25rem;
  margin-left: 0.7rem;
  border-left: 2px solid rgba(6, 78, 59, 0.08);
  padding-left: 0.55rem;
}
.submenu-link {
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  color: rgba(30, 41, 59, 0.75);
  text-decoration: none;
  transition: color 0.15s;
  padding: 0.1rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
}
.submenu-link:hover { color: #065f46; }
.submenu-link--small { font-size: 0.7rem; color: rgba(30, 41, 59, 0.6); }
.submenu-link--small:hover { color: #065f46; }
</style>
