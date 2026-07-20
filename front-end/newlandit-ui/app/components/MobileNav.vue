<template>
  <aside
    class="w-72 h-full bg-[#fbf6da] border-r border-slate-200 p-8 flex flex-col overflow-y-auto"
    aria-label="Mobile navigatie"
  >
    <div class="flex flex-col flex-1">
      <!-- header: logo + close -->
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

      <nav class="flex-1" aria-label="Mobile primary">
        <ul class="space-y-5">
          <li v-for="nav in navItems" :key="nav.name" class="nav-item">

            <!-- Top-level item WITH children -->
            <template v-if="nav.children">
              <div class="flex items-center justify-between">
                <!-- Link navigates to page -->
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
                <!-- Arrow only toggles children -->
                <button
                  class="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                  @click.stop="openMenu = openMenu === nav.name ? null : nav.name"
                  :aria-expanded="openMenu === nav.name"
                  :aria-label="`Toggle ${nav.name} submenu`"
                >
                  <Icon
                    name="lucide:chevron-right"
                    class="w-4 h-4 text-slate-500 transition-transform duration-200"
                    :class="{ 'rotate-90': openMenu === nav.name }"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <!-- Level 2 submenu -->
              <ul v-show="openMenu === nav.name" class="submenu">
                <li v-for="child in nav.children" :key="child.name">

                  <!-- Child WITH grandchildren -->
                  <template v-if="child.children">
                    <div class="flex items-center justify-between">
                      <NuxtLink
                        :to="child.href"
                        class="submenu-link flex-1"
                        @click="$emit('close')"
                      >
                        {{ child.name }}
                      </NuxtLink>
                      <button
                        class="p-1 rounded hover:bg-slate-100 transition-colors"
                        @click.stop="openSubmenu = openSubmenu === child.name ? null : child.name"
                        :aria-label="`Toggle ${child.name} submenu`"
                      >
                        <Icon
                          name="lucide:chevron-right"
                          class="w-3 h-3 text-slate-400 transition-transform duration-200"
                          :class="{ 'rotate-90': openSubmenu === child.name }"
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    <!-- Level 3 submenu -->
                    <ul v-show="openSubmenu === child.name" class="submenu submenu--nested">
                      <li v-for="grandchild in child.children" :key="grandchild.name">
                        <NuxtLink
                          :to="grandchild.href"
                          class="submenu-link submenu-link--small"
                          @click="$emit('close')"
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
                      @click="$emit('close')"
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
    children?: Array<{
      name: string
      href: string
      children?: Array<{ name: string; href: string }>
    }>
  }>
}>()

defineEmits<{ close: [] }>()

const route = useRoute()
const openMenu    = ref<string | null>(null)
const openSubmenu = ref<string | null>(null)

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
.submenu--nested {
  margin-top: 0.4rem;
  margin-left: 1rem;
  border-left: 2px solid rgba(6, 78, 59, 0.08);
  padding-left: 0.75rem;
}
.submenu-link {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(30, 41, 59, 0.75);
  text-decoration: none;
  transition: color 0.15s;
  padding: 0.2rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
}
.submenu-link:hover { color: #065f46; }
.submenu-link--small {
  font-size: 0.8rem;
  color: rgba(30, 41, 59, 0.6);
}
.submenu-link--small:hover { color: #065f46; }
</style>
