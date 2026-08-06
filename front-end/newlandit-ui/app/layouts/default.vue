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
import { useHead, useRuntimeConfig } from '#imports'
import { CONTACT } from '#shared/utils/contact'

const mobileNavOpen = ref(false)

// ── LocalBusiness structured data (site-wide) ──────────────────────
const siteUrl = String(useRuntimeConfig().public.siteUrl || '').replace(/\/+$/, '')

const dayMap: Record<string, string[]> = {
  'Mon - Thu': ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
  Fri: ['Friday'],
}

const openingHoursSpecification = CONTACT.openingHours
  .filter((e) => !/closed/i.test(e.hours) && dayMap[e.label])
  .map((e) => {
    const [opens, closes] = (e.hours.match(/\d{1,2}:\d{2}/g) || [])
    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap[e.label],
      opens,
      closes,
    }
  })

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#organization`,
  name: 'Newland IT-Solutions',
  description:
    'IT-bedrijf in Amsterdam voor softwareontwikkeling, IT-support en professionele websites voor zzp’ers en het mkb.',
  url: siteUrl,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  vatID: CONTACT.btw,
  foundingDate: String(CONTACT.startYear),
  image: `${siteUrl}/images/IMG_8959.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    postalCode: CONTACT.address.postalCode,
    addressLocality: CONTACT.address.city,
    addressCountry: 'NL',
  },
  areaServed: [
    { '@type': 'City', name: 'Amsterdam' },
    { '@type': 'AdministrativeArea', name: 'Metropoolregio Amsterdam' },
  ],
  openingHoursSpecification,
  sameAs: ['https://www.linkedin.com/company/105865773'],
  identifier: { '@type': 'PropertyValue', name: 'KVK', value: CONTACT.kvk },
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessJsonLd),
    },
  ],
})

const navItems = [
  { name: 'Home', href: '/', icon: 'lucide:home' },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: 'lucide:share-2',
    children: [
      {
        name: 'Software Development',
        href: '/solutions/software-development',
        children: [
          { name: 'CMS Website & WordPress', href: '/solutions/cms-websites' },
        ],
      },
      {
        name: 'IT Consulting',
        href: '/solutions/it-consulting',
        children: [
          { name: 'IT Support (helpdesk, remote & on-site)', href: '/solutions/it-support' },
        ],
      },
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
