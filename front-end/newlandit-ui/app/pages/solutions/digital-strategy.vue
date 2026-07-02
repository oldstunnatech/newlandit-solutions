<template>
  <section class="detail-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink to="/solutions" class="back-link mb-8">← All solutions</NuxtLink>

      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="eyebrow-pill mb-4">Digital Strategy & Enablement</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6">Digital Strategy & Enablement</h1>
      </div>

      <div class="detail-card">
        <p class="text-lg leading-relaxed mb-8">
          We guide both IT and non-IT projects with a structured approach. In addition, we strengthen your organization with digital strategies for brand development. From project management to branding and design.
        </p>

        <h2 class="text-xl font-bold mb-5">What we offer:</h2>
        <ul class="offer-list mb-10">
          <li v-for="item in offers" :key="item">{{ item }}</li>
        </ul>

        <a href="/contact" class="btn-primary">More about Enablement</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const offers = [
  'Project management (also outside IT)',
  'Digital strategy, branding & visual design',
  'UI/UX Design',
]
</script>

<style scoped>
.detail-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: 0.3;
  animation: blobFloat 8s ease-in-out infinite;
}
.blob-1 { width: 450px; height: 450px; background: radial-gradient(circle, #1d8044, #0d4226); top: -120px; right: -100px; }
.blob-2 { width: 350px; height: 350px; background: radial-gradient(circle, #22c55e, #156534); bottom: -100px; left: -80px; animation-delay: 3s; }
@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}
.back-link {
  display: inline-block;
  color: #4ade80;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
}
.back-link:hover { text-decoration: underline; }
.eyebrow-pill {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.95rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
  padding: 0.4rem 1.1rem;
}
.detail-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2.5rem;
}
.offer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.offer-list li {
  position: relative;
  padding-left: 1.5rem;
  color: #FBF6DA;
  font-weight: 500;
}
.offer-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4ade80;
}
.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #FBF6DA;
  color: #0d4226;
  font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
}
.eyebrow-pill{
  color: #FBF6DA;
}
.text-4xl{
  color: #FBF6DA;
}
.text-xl{
  color: #FBF6DA;
}
.text-lg{
  color: #FBF6DA;
}

.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); }
@media (prefers-reduced-motion: reduce) {
  .blob { animation: none; }
}
</style>
