<template>
  <section class="contact-page relative min-h-screen text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="uppercase tracking-widest text-green-300 text-sm font-semibold mb-3">
          Get in touch
        </p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-4">
          Let's talk about your project
        </h1>
        <p class="text-white/70">
          Tell us what you're working on and we'll get back to you within one business
          day.
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
                <label for="name">Name *</label>
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
                <label for="email">Email *</label>
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
                <label for="phone">Phone</label>
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
                <label for="company">Company</label>
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
              <label for="address">Address</label>
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
              <label for="message">Message *</label>
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
              <label for="attachment">Attachment (optional)</label>

              <label v-if="!attachment" for="attachment" class="file-drop">
                <span class="file-drop-icon">📎</span>
                <span class="text-sm text-white/70">
                  Click to attach a brief, RFP, or document
                </span>
                <span class="text-xs text-white/40 mt-1"
                  >PDF, Word, or image — up to 5MB</span
                >
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
                  aria-label="Remove attachment"
                >
                  ✕
                </button>
              </div>
              <span v-if="attachmentError" class="field-error">{{
                attachmentError
              }}</span>
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
              {{ status === "submitting" ? "Sending…" : "Send message" }}
            </button>
          </form>

          <div v-else class="contact-form-card text-center py-16">
            <div class="success-icon">✓</div>
            <h2 class="text-2xl font-bold mt-6 mb-2">Message sent</h2>
            <p class="text-white/70 max-w-sm mx-auto mb-8">{{ statusMessage }}</p>
            <button type="button" class="btn-secondary" @click="reset">
              Send another message
            </button>
          </div>
        </div>

        <div class="lg:col-span-2 flex flex-col gap-6">
          <div class="info-card">
            <p
              class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4"
            >
              Direct contact
            </p>

            <a :href="CONTACT.phoneHref" class="info-row">
              <span class="info-icon">📞</span>
              <span>{{ CONTACT.phone }}</span>
            </a>
            <a :href="CONTACT.emailHref" class="info-row">
              <span class="info-icon">✉️</span>
              <span>{{ CONTACT.email }}</span>
            </a>
            <a :href="CONTACT.website" target="_blank" rel="noopener" class="info-row">
              <span class="info-icon">🌐</span>
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
              Response time
            </p>
            <div class="flex items-baseline gap-2 mb-1">
              <span class="text-3xl font-extrabold text-white">24hr</span>
              <span class="text-white/60 text-sm">typical reply</span>
            </div>
            <p class="text-white/60 text-sm mt-2">
              We read every message personally — no ticket queues, no bots.
            </p>

            <div class="info-divider" />

            <p
              class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-3"
            >
              Prefer chat?
            </p>
            <a
              href="https://wa.me/31600000000"
              target="_blank"
              rel="noopener"
              class="btn-secondary self-start text-sm"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
        </div>

      <!-- ============================================================
           VISIT US — map, address, opening hours
      ============================================================ -->
      <div class="mt-16">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <p class="uppercase tracking-widest text-green-300 text-sm font-semibold mb-3">Visit us</p>
          <h2 class="text-3xl sm:text-4xl font-bold">Find our office</h2>
        </div>

        <div class="map-card mb-8">
          <iframe
            :src="CONTACT.address.mapEmbedUrl"
            class="w-full h-[360px] sm:h-[420px] rounded-2xl"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Office location map"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="info-card">
            <p class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4">Address</p>
            <p class="text-white/85 text-sm leading-relaxed">
              {{ CONTACT.address.street }}<br />
              {{ CONTACT.address.postalCode }} {{ CONTACT.address.city }}
            </p>

            <div class="info-divider" />

            <p class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-2">Closed on public holidays</p>
            <p class="text-white/60 text-xs leading-relaxed">{{ CONTACT.closedHolidays }}</p>
          </div>

          <div class="info-card">
            <p class="uppercase tracking-widest text-green-300 text-xs font-semibold mb-4">Opening hours</p>
            <div class="hours-row" v-for="entry in CONTACT.openingHours" :key="entry.label">
              <span class="text-white/70">{{ entry.label }}</span>
              <span class="text-white/90 font-medium">{{ entry.hours }}</span>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CONTACT } from "~~/shared/utils/contact";

definePageMeta({
  layout: "default",
});

const {
  form,
  errors,
  attachment,
  attachmentError,
  status,
  statusMessage,
  onAttachmentChange,
  clearAttachment,
  submit,
  reset,
} = useContactForm();
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
  color: rgba(255, 255, 255, 0.8);
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
  font-size: 1.5rem;
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
  background: white;
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
  color: white;
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
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.2s;
}
.info-row:hover {
  color: #4ade80;
}
.info-icon {
  font-size: 1rem;
  width: 1.5rem;
  text-align: center;
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

@media (prefers-reduced-motion: reduce) {
  .blob,
  .spinner {
    animation: none;
  }
}
</style>
