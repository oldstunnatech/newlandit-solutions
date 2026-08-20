<template>
  <section class="contact-page relative min-h-screen text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="uppercase tracking-widest text-green-300 text-sm font-semibold mb-3">
          {{ t('contact.eyebrow') }}
        </p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">
          {{ t('contact.heading') }}
        </h1>
        <p class="hours">
          {{ t('contact.intro') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div class="lg:col-span-3">
          <form
            v-if="status !== 'success'"
            class="contact-form-card"
            novalidate
            @submit.prevent="submit"
          >
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="field">
                <label for="name">{{ t('contact.form.name') }} *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  :class="{ 'has-error': errors.name }"
                  placeholder="Jane Doe"
                />
                <span v-if="errors.name" class="field-error">{{ errors.name }}</span>
              </div>

              <div class="field">
                <label for="email">{{ t('contact.form.email') }} *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  :class="{ 'has-error': errors.email }"
                  placeholder="jane@company.com"
                />
                <span v-if="errors.email" class="field-error">{{ errors.email }}</span>
              </div>

              <div class="field">
                <label for="phone">{{ t('contact.form.phone') }}</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  autocomplete="tel"
                  :class="{ 'has-error': errors.phone }"
                  placeholder="+31 6 12 34 56 78"
                />
                <span v-if="errors.phone" class="field-error">{{ errors.phone }}</span>
              </div>

              <div class="field">
                <label for="company">{{ t('contact.form.company') }}</label>
                <input
                  id="company"
                  v-model="form.company"
                  type="text"
                  autocomplete="organization"
                  :class="{ 'has-error': errors.company }"
                  placeholder="Acme B.V."
                />
                <span v-if="errors.company" class="field-error">{{
                  errors.company
                }}</span>
              </div>
            </div>

            <div class="field mt-5">
              <label for="address">{{ t('contact.form.address') }}</label>
              <input
                id="address"
                v-model="form.address"
                type="text"
                autocomplete="street-address"
                :class="{ 'has-error': errors.address }"
                placeholder="123 Main St, Amsterdam"
              />
              <span v-if="errors.address" class="field-error">{{ errors.address }}</span>
            </div>

            <div class="field mt-5">
              <label for="message">{{ t('contact.form.message') }} *</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                :class="{ 'has-error': errors.message }"
                placeholder="Tell us a bit about what you need help with…"
              />
              <span v-if="errors.message" class="field-error">{{ errors.message }}</span>
            </div>

            <div class="field mt-5">
  <label for="attachment">{{ t('contact.form.attachment') }}</label>

  <label
    v-if="!attachment"
    for="attachment"
    class="file-drop"
    :class="{ 'file-drop--active': isDragging }"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @drop.prevent="onDrop"
  >
    <span class="file-drop-icon">
      <PaperclipIcon :size="22" :stroke-width="1.5" />
    </span>
    <span class="text-sm text-white/70">
      {{ isDragging ? t('contact.form.dropActive') : t('contact.form.dropIdle') }}
    </span>
    <span class="text-xs text-white/40 mt-1">{{ t('contact.form.fileHint') }}</span>
  </label>

  <input
    id="attachment"
    type="file"
    class="sr-only"
    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp"
    @change="onAttachmentChange"
  />

  <div v-if="attachment" class="file-chip">
    <span class="truncate">{{ attachment.name }}</span>
    <button
      type="button"
      class="file-chip-remove"
      @click="clearAttachment"
      :aria-label="t('contact.form.removeAttachment')"
    >
      <XIcon :size="16" />
    </button>
  </div>
  <span v-if="attachmentError" class="field-error">{{ attachmentError }}</span>
</div>
            <div class="honeypot" aria-hidden="true">
              <label for="website">Website</label>
              <input
                id="website"
                v-model="form.website"
                type="text"
                tabindex="-1"
                autocomplete="off"
              />
            </div>

            <div v-if="status === 'error'" class="form-banner form-banner-error">
              {{ statusMessage }}
            </div>

            <button
              type="submit"
              class="btn-primary w-full mt-7 justify-center flex items-center gap-2"
              :disabled="status === 'submitting'"
            >
              <span v-if="status === 'submitting'" class="spinner" />
              {{ status === "submitting" ? t('contact.form.sending') : t('contact.form.send') }}
            </button>
          </form>

          <div v-else class="contact-form-card text-center py-16">
            <div class="success-icon"><CheckIcon :size="28" :stroke-width="2.5" /></div>
            <h2 class="text-2xl font-bold mt-6 mb-2">{{ t('contact.form.sentHeading') }}</h2>
            <p class="text-white/70 max-w-sm mx-auto mb-8">{{ statusMessage }}</p>
            <button type="button" class="btn-secondary" @click="reset">
              {{ t('contact.form.sendAnother') }}
            </button>
          </div>
        </div>

        <div class="lg:col-span-2 flex flex-col gap-6">
          <div class="info-card">
            <p
              class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4"
            >
              {{ t('contact.info.direct') }}
            </p>

           <a :href="CONTACT.phoneHref" class="info-row">
              <span class="info-icon"><PhoneIcon :size="16" /></span>
              <span>{{ CONTACT.phone }}</span>
            </a>
            <a :href="CONTACT.emailHref" class="info-row">
              <span class="info-icon"><MailIcon :size="16" /></span>
              <span>{{ CONTACT.email }}</span>
            </a>
            <a :href="CONTACT.website" target="_blank" rel="noopener" class="info-row">
              <span class="info-icon"><GlobeIcon :size="16" /></span>
              <span>{{ CONTACT.websiteDisplay }}</span>
            </a>

            <div class="info-divider" />

            <div class="text-xs text-white/40 space-y-1">
              <p>KvK {{ CONTACT.kvk }}</p>
              <p>BTW {{ CONTACT.btw }}</p>
            </div>
          </div>

          <div class="info-card flex-1 flex flex-col">
            <p
              class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4"
            >
              {{ t('contact.info.responseTime') }}
            </p>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-3xl font-extrabold">72hr</span>
              <span class="text-white/60 text-sm">{{ t('contact.info.typicalReply') }}</span>
            </div>
            <p class="text-white/60 text-sm mt-2">
              {{ t('contact.info.responseNote') }}
            </p>

            <div class="info-divider" />

            <p
              class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-3"
            >
              {{ t('contact.info.preferChat') }}
            </p>
            <a
              href="https://wa.me/31648364450"
              target="_blank"
              rel="noopener"
              class="btn-secondary self-start text-sm"
            >
              {{ t('contact.info.whatsappBtn') }}
            </a>
          </div>
        </div>
        </div>

      <!-- ============================================================
           VISIT US — map, address, opening hours
      ============================================================ -->
      <div class="mt-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <p class="uppercase tracking-widest text-green-300 text-sm font-semibold mb-3">{{ t('contact.visit.eyebrow') }}</p>
          <h2 class="text-3xl sm:text-4xl font-bold">{{ t('contact.visit.heading') }}</h2>
        </div>

        <div class="map-card mb-8">
          <iframe
            :src="CONTACT.address.mapEmbedUrl"
            class="w-full h-[360px] sm:h-[420px] rounded-2xl"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="t('contact.visit.mapTitle')"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="info-card">
            <p class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4">{{ t('contact.visit.address') }}</p>
            <p class="text-sm leading-relaxed">
              {{ CONTACT.address.street }}<br />
              {{ CONTACT.address.postalCode }} {{ CONTACT.address.city }}
            </p>

            <div class="info-divider" />

            <p class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-2">{{ t('contact.visit.closedHolidays') }}</p>
            <p class="text-xs leading-relaxed">{{ CONTACT.closedHolidays }}</p>
          </div>

          <div class="info-card">
            <p class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4">{{ t('contact.visit.openingHours') }}</p>
            <div class="hours-row" v-for="entry in CONTACT.openingHours" :key="entry.label">
              <span class="hours">{{ entry.label }}</span>
              <span class="hours font-medium">{{ entry.hours }}</span>
            </div>
          </div>
        </div> 
      </div>
    </div>
     <!-- WhatsApp FAB -->
    <a href="https://wa.me/31648364450" target="_blank" rel="noopener noreferrer" class="whatsapp-fab" :title="t('common.whatsapp')">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">{{ t('common.whatsapp') }}</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import { CONTACT } from '~~/shared/utils/contact'
import { useI18n } from '#imports'
import { PaperclipIcon, XIcon, CheckIcon, PhoneIcon, MailIcon, GlobeIcon } from '@lucide/vue'

definePageMeta({
  layout: 'default',
})

const { t } = useI18n()

useSeo({
  title: t('seo.contact.title'),
  description: t('seo.contact.description'),
  path: '/contact',
})

const {
  form, errors, attachment, attachmentError,
  isDragging, status, statusMessage,
  onAttachmentChange, onDrop, clearAttachment, submit, reset,
} = useContactForm()
</script>

<style scoped>
.contact-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: blobFloat 8s ease-in-out infinite;
}
.blob-1 {
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, #1d8044, #0d4226);
  top: -120px;
  right: -100px;
}
.blob-2 {
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, #22c55e, #156534);
  bottom: -100px;
  left: -80px;
  animation-delay: 3s;
}
@keyframes blobFloat {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.95);
  }
}

.contact-form-card,
.info-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
}


.field {
  display: flex;
  flex-direction: column;

}
.field label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #fbf6da;
  margin-bottom: 0.4rem;
}
.field input,
.field textarea {
  background: rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.7rem 0.9rem;
  color: white;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s, background 0.2s;
  resize: vertical;
}
.field input::placeholder,
.field textarea::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.field input:focus,
.field textarea:focus {
  border-color: #22c55e;
  background: rgba(0, 0, 0, 0.25);
}
.field input.has-error,
.field textarea.has-error {
  border-color: #f87171;
}
.field-error {
  color: #fca5a5;
  font-size: 0.75rem;
  margin-top: 0.35rem;
}

.honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.file-drop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1.5px dashed rgba(255, 255, 255, 0.25);
  border-radius: 0.9rem;
  padding: 1.5rem 1rem;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.file-drop:hover {
  border-color: #22c55e;
  background: rgba(255, 255, 255, 0.04);
}
.file-drop-icon {
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.4rem;
}

.file-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.6rem 1rem;
  font-size: 0.85rem;
}
.file-chip-remove {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  font-size: 0.85rem;
  flex-shrink: 0;
}
.file-chip-remove:hover {
  color: white;
}

.form-banner {
  margin-top: 1.25rem;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
}
.form-banner-error {
  background: rgba(248, 113, 113, 0.12);
  border: 1px solid rgba(248, 113, 113, 0.3);
  color: #fecaca;
}

.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #fbf6da;
  color: #0d4226;
  font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
  text-decoration: none;
  border: none;
  cursor: pointer;
}
.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}
.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.btn-secondary {
  display: inline-block;
  padding: 0.65rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: #fbf6da;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: background 0.2s, border-color 0.2s;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.7);
}

.spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(6, 78, 59, 0.3);
  border-top-color: #0d4226;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.success-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto;
  background: rgba(52, 211, 153, 0.15);
  border: 1px solid rgba(52, 211, 153, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #22c55e;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 0;
  color: #fbf6da;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}
.info-row:hover {
  color: #4ade80;
}
.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  flex-shrink: 0;
}

.info-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1.25rem 0;
}

.map-card {
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.5rem;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0;
  font-size: 0.85rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.hours-row:last-child {
  border-bottom: none;
}

.contact-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
}


.eyebrow-pill {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.95rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52, 211, 153, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 9999px;
  padding: 0.4rem 1.1rem;
}

.text-4xl{
  color: #fbf6da;
}
.text-3xl{
  color: #fbf6da;
}

.text-sm{
  color: #fbf6da;
}
.hours{
  color: #fbf6da;
}
.text-xs{
  color: #fbf6da;
}

.file-drop--active {
  border-color: #4ade80;
  background: rgba(74, 222, 128, 0.08);
}

.file-drop--active .file-drop-icon {
  color: #4ade80;
}

.whatsapp-fab {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 1000;
  background: #25d366; color: white;
  border-radius: 9999px;
  padding: 0.85rem 1.25rem;
  display: flex; align-items: center; gap: 0.5rem;
  box-shadow: 0 4px 24px rgba(37,211,102,0.4);
  text-decoration: none; font-weight: 600; font-size: 0.875rem;
  transition: transform 0.2s, box-shadow 0.2s;
}
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 32px rgba(37,211,102,0.5); }
.whatsapp-label { display: block; }

@media (prefers-reduced-motion: reduce) {
  .blob,
  .spinner {
    animation: none;
  }
}
</style>
