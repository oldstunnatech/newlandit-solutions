<template>
  <aside class="w-72 min-h-screen bg-[#fbf6da] border-r border-slate-200 p-8 hidden md:flex md:flex-col" aria-label="Hoofd navigatie">
    <div class="flex flex-col flex-1">
      <!-- logo / brand area -->
      <div class="mb-8">
        <img :src="logo" alt="Newland IT-Solutions" class="w-40 object-contain">
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
              <span class="w-6 h-6 shrink-0 text-slate-800" aria-hidden="true">
                <IconView :name="nav.icon" />
              </span>
               <span class="text-lg font-semibold">{{ nav.name }}</span>
             </NuxtLink>
           </li>
         </ul>
       </nav>

       <!-- footer small -->
       <div class="mt-auto text-slate-600 text-sm">
         © {{ year }} Newland IT-Solutions. All rights reserved.
       </div>
     </div>
   </aside>
 </template>

 <script setup lang="ts">
import { defineComponent, h, getCurrentInstance, type VNode } from 'vue'
import { useRoute } from 'vue-router'
import { isActivePath } from '#shared/utils/navigation'
import logo from '~/assets/company_logo.png'

const route = useRoute()

const navItems = [
  { name: 'Home', href: '/', icon: 'tabler:home' },
  { name: 'Solutions', href: '/solutions', icon: 'tabler:affiliate' },
  { name: 'About', href: '/about', icon: 'tabler:user' },
  { name: 'Contact', href: '/contact', icon: 'tabler:info-circle' }
]

const IconView = defineComponent({
  name: 'IconView',
  props: { name: { type: String, required: true } },
  setup(props) {
    return (): VNode => {
      const inst = getCurrentInstance()
      if (inst) {
        const registry = (inst.appContext && inst.appContext.components) || {}
        const NuxtIconComp = registry['NuxtIcon'] || registry['Icon']
        if (NuxtIconComp) return h(NuxtIconComp as any, { name: props.name })
      }

      // fallback: single-letter placeholder to preserve layout
      const label = (props.name && props.name.charAt(0).toUpperCase()) || '?'
      return h('span', { class: 'inline-block w-6 h-6 text-center leading-6 text-sm' }, label)
    }
  }
})

const year = new Date().getFullYear()

const isActive = (href: string) => isActivePath(href, route.path)
</script>

<style scoped>
 /* small tweak: slightly reduced opacity class for non-active */
 .opacity-85 { opacity: 0.85; }
 </style>
