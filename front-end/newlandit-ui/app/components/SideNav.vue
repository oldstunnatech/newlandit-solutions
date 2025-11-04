<template>
  <aside class="w-72 min-h-screen bg-[#fbf6da] border-r border-slate-200 p-8 hidden md:block" aria-label="Hoofd navigatie">
    <div class="flex flex-col h-full">
      <!-- logo / brand area -->
      <div class="mb-8">
        <!-- replace /logo.png with your actual image if available -->
        <img src="/front-end/newlandit-ui/app/assets/HD-Transparant - 1.png" alt="Newland IT-Solutions" class="w-40 object-contain" />
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
       <div class="mt-8 text-slate-600 text-sm">
         © {{ year }} Newland IT-Solutions
       </div>
     </div>
   </aside>
 </template>

 <script setup lang="ts">
-import { defineComponent, h, resolveComponent, type VNode } from 'vue'
+import { defineComponent, h, getCurrentInstance, type VNode } from 'vue'
 import { useRoute } from 'vue-router'
 import { isActivePath } from '@/shared/utils/navigation'

 const route = useRoute()

// Navigation items used in the template
const items: Array<{ name: string; to: string; icon: string }> = [
  { name: 'Home', to: '/', icon: 'tabler:home' },
  { name: 'Solutions', to: '/solutions', icon: 'tabler:grid' },
  { name: 'About', to: '/about', icon: 'tabler:info-circle' },
  { name: 'Contact', to: '/contact', icon: 'tabler:mail' },
]

// precompute hrefs and `to` objects to avoid complex template expressions
const navItems = items.map(i => ({ ...i, href: i.to || '/', to: { path: i.to || '/' } }))

// IconView: prefer the runtime NuxtIcon/Icon if available; otherwise render a small fallback SVG
const IconView = defineComponent({
  name: 'IconView',
  props: { name: { type: String as () => string, required: true } },
  setup(props) {
    return (): VNode => {
      // try to access registered global components via the component instance
      const inst = getCurrentInstance()
      if (inst) {
        const registry = (inst.appContext && inst.appContext.components) || {}
        const NuxtIconComp = registry['NuxtIcon'] || registry['Icon']
        if (NuxtIconComp) return h(NuxtIconComp as any, { name: props.name })
      }

       // fallback simple icons
       const base = { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor' }
       switch (props.name) {
         case 'tabler:home':
         case 'home':
           return h('svg', base, [h('path', { d: 'M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z' })])
         case 'tabler:grid':
         case 'grid':
           return h('svg', base, [h('rect', { x: '3', y: '3', width: '8', height: '8' }), h('rect', { x: '13', y: '3', width: '8', height: '8' })])
         case 'tabler:info-circle':
         case 'info':
           return h('svg', base, [h('circle', { cx: '12', cy: '12', r: '9' }), h('line', { x1: '12', y1: '8', x2: '12', y2: '12' })])
         case 'tabler:mail':
         case 'mail':
           return h('svg', base, [h('path', { d: 'M3 8l9 6 9-6' }), h('path', { d: 'M21 8v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8' })])
         default:
           return h('span', { class: 'inline-block w-6 h-6' }, '?')
       }
     }
   }
 })

// Helper: delegate to shared util
const isActive = (href: string) => isActivePath(href, route.path)

// current year for the footer
const year = new Date().getFullYear()
</script>

<style scoped>
 /* small tweak: slightly reduced opacity class for non-active */
 .opacity-85 { opacity: 0.85; }
 </style>
