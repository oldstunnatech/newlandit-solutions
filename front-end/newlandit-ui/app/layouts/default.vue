<template>
  <div class="flex flex-col min-h-screen bg-green-800">
    <!-- Mobile header — hamburger + logo -->
    <Header @toggle-nav="mobileNavOpen = !mobileNavOpen" />

    <!-- Mobile overlay -->
    <Transition name="fade">
      <div
        v-if="mobileNavOpen"
        class="fixed inset-0 z-40 bg-black/50 md:hidden"
        @click="mobileNavOpen = false"
      />
    </Transition>

    <div class="flex flex-1">
      <!-- Desktop sidebar (always visible md+) -->
      <SideNav class="w-64 shrink-0" />

      <!-- Mobile drawer -->
      <Transition name="slide">
        <div
          v-if="mobileNavOpen"
          class="fixed inset-y-0 left-0 z-50 md:hidden"
        >
          <MobileNav :nav-items="navItems" @close="mobileNavOpen = false" />
        </div>
      </Transition>

      <div class="flex flex-col flex-1 min-w-0">
        <main class="flex-1">
          <slot />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileNavOpen = ref(false)

const navItems = [
  { name: 'Home', href: '/', icon: 'lucide:home' },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: 'lucide:share-2',
    children: [
      { name: 'Software Development', href: '/solutions/software-development' },
      { name: 'IT Consulting', href: '/solutions/it-consulting' },
      { name: 'Digital Strategy & Enablement', href: '/solutions/digital-strategy' },
    ],
  },
  { name: 'About', href: '/about', icon: 'lucide:user' },
  { name: 'Contact', href: '/contact', icon: 'lucide:mail' },
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(-100%); }
</style>
