<template>
  <footer class="bg-[#04271f] text-slate-100 py-12 mt-250" role="contentinfo" aria-label="Site footer">
    <div class="max-w-6xl mx-auto px-6">
      <!-- inset panel similar to screenshot -->
      <div class="bg-[#103826] p-8 rounded-sm shadow-inner border border-black/10">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          <!-- left: contact details -->
          <div class="flex-1">
            <div class="space-y-3 text-slate-200">
              <p>
                <span class="font-semibold">Telefoonnummer:</span>
                <a :href="contact.phoneHref" class="font-semibold text-slate-100 ml-2 hover:underline">{{ contact.phone }}</a>
              </p>

              <p>
                <span class="font-semibold">E-mail:</span>
                <a :href="contact.emailHref" class="font-semibold text-slate-100 ml-2 hover:underline">{{ contact.email }}</a>
              </p>

              <p>
                <span class="font-semibold">Website:</span>
                <a :href="contact.website" target="_blank" rel="noopener noreferrer" class="font-semibold text-slate-100 ml-2 hover:underline">{{ contact.websiteDisplay || contact.website }}</a>
              </p>

              <p>
                <span class="font-semibold">Adres:</span>
                <span class="ml-2 font-semibold text-slate-100">{{ contact.address.street }}, {{ contact.address.postalCode }} {{ contact.address.city }}</span>
              </p>

              <p>
                <span class="font-semibold">KVK:</span>
                <span class="ml-2 font-semibold text-slate-100">{{ contact.kvk }}</span>
              </p>

              <p>
                <span class="font-semibold">BTW-nummer:</span>
                <span class="ml-2 font-semibold text-slate-100">{{ contact.btw }}</span>
              </p>
            </div>

            <div class="mt-6 text-slate-300">© {{ yearRange }} Newland IT-Solution's</div>
            <div class="mt-4 flex flex-wrap gap-4">
              <NuxtLink :to="localePath('/privacy')" class="legal-link">{{ t('nav.privacy') }}</NuxtLink>
              <NuxtLink :to="localePath('/cookies')" class="legal-link">{{ t('nav.cookies') }}</NuxtLink>
              <NuxtLink :to="localePath('/terms')" class="legal-link">{{ t('nav.terms') }}</NuxtLink>
            </div>
          </div>

          <!-- right: icons -->
          <div class="flex flex-col items-end gap-4">
            <div class="flex gap-4">
              <!-- LinkedIn icon circle -->
              <a href="https://www.linkedin.com/company/105865773" aria-label="LinkedIn" class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 text-blue-400 bg-transparent hover:bg-blue-500/5">
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.789-1.75-1.762s.784-1.762 1.75-1.762 1.75.789 1.75 1.762-.784 1.762-1.75 1.762zm13.5 10.268h-3v-4.5c0-1.08-.02-2.468-1.503-2.468-1.504 0-1.734 1.174-1.734 2.392v4.576h-3v-9h2.88v1.233h.041c.401-.758 1.379-1.556 2.84-1.556 3.037 0 3.6 1.999 3.6 4.597v5.726z"/>
                </svg>
              </a>

              <!-- WhatsApp icon circle -->
              <a href="https://wa.me/31648364450" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/5">
                <svg class="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M20.52 3.483A11.945 11.945 0 0012.002.003C5.373.003-.002 5.378-.002 12.006c0 2.108.558 4.168 1.62 5.997L.75 23.25l5.545-1.47A11.95 11.95 0 0012.002 24c6.63 0 12.005-5.375 12.005-12.006 0-3.208-1.249-6.22-3.487-8.511zM12 21.5c-1.52 0-3.017-.397-4.33-1.146l-.31-.18-3.29.873.884-3.207-.203-.33A8.456 8.456 0 013.55 12.006c0-4.69 3.816-8.506 8.451-8.506 4.647 0 8.46 3.816 8.46 8.506s-3.813 8.494-8.46 8.494z"/>
                  <path fill="currentColor" d="M17.56 14.08c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.73.91-.9 1.09-.17.19-.34.21-.62.07-.28-.14-1.15-.42-2.19-1.36-.81-.72-1.36-1.61-1.52-1.89-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.47.14-.16.18-.27.28-.45.09-.18.05-.34-.02-.47-.07-.13-.64-1.54-.88-2.11-.23-.55-.46-.48-.63-.49-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.66 1.12 2.84.14.18 1.94 3.03 4.7 4.25 1.66.72 2.96.97 3.98.78.61-.12 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.54-.33z"/>
                </svg>
              </a>
            </div>

            <!-- optional small note or extra links could go here -->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { CONTACT } from '#shared/utils/contact'
import type { ContactInfo } from '#shared/types/company'
import { computed } from 'vue'
import { useI18n, useLocalePath } from '#imports'

const { t } = useI18n()
const localePath = useLocalePath()

const contact: ContactInfo = CONTACT
const currentYear = new Date().getFullYear()
const yearRange = computed(() => (contact.startYear === currentYear ? `${contact.startYear}` : `${contact.startYear} - ${currentYear}`))
</script>

<style scoped>
.font-semibold { color: #FBF6DA; }
.mt-6 { color: #FBF6DA; }
.legal-link {
  font-size: 0.8rem;
  color: rgba(251, 246, 218, 0.5);
  text-decoration: none;
  transition: color 0.2s;
}
.legal-link:hover { color: rgba(251, 246, 218, 0.85); }
</style>