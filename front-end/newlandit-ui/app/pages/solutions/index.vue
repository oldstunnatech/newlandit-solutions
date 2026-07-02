<template>
  <section class="solutions-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="eyebrow-pill mb-4">What we do</p>
        <h1 class="text-4xl sm:text-5xl font-extrabold mb-6">Solutions</h1>
        <p class="text-white/70 text-lg leading-relaxed">
          At Newland IT-Solutions, we deliver smart and scalable IT solutions that help organizations grow, streamline processes, and become digitally stronger. From software development to strategy and support — we are ready to be your digital partner.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="(card, i) in cards"
          :key="card.slug"
          :to="`/solutions/${card.slug}`"
          class="solution-card fade-in-up"
          :style="`animation-delay: ${i * 0.12}s`"
        >
          <div class="solution-icon">
            <component :is="card.icon" :size="28" :stroke-width="1.5" class="text-green-300" />
          </div>
          <h3 class="text-xl font-bold mt-5 mb-3">{{ card.title }}</h3>
          <p class="text-white/65 text-sm leading-relaxed mb-5">{{ card.summary }}</p>
          <span class="solution-link">Learn more →</span>
        </NuxtLink>
      </div>
    </div>

    <div class="relative z-10 py-20 px-6 text-center border-t border-white/10">
      <div class="max-w-2xl mx-auto">
        <p class="text-white/80 text-lg mb-8">
          Not sure which solution suits your situation? Contact us for a no-obligation consultation. Together, we will find the right path.
        </p>
        <a href="/contact" class="btn-primary">Contact us</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CodeIcon, HeadsetIcon, CompassIcon } from '@lucide/vue'

definePageMeta({
  layout: 'default',
})

const cards = [
  {
    slug: 'software-development',
    icon: CodeIcon,
    title: 'Software Development',
    summary: 'From custom applications to CMS websites: we build digital solutions that perfectly align with your organization. We guide the entire development process, from strategy to implementation.',
  },
  {
    slug: 'it-consulting',
    icon: HeadsetIcon,
    title: 'IT Consulting',
    summary: 'We support organizations in making smart IT decisions and ensure that systems always remain operational. From strategic advice to daily IT support.',
  },
  {
    slug: 'digital-strategy',
    icon: CompassIcon,
    title: 'Digital Strategy & Enablement',
    summary: 'We guide both IT and non-IT projects with a structured approach. In addition, we strengthen your organization with digital strategies for brand development.',
  },
]
</script>

<style scoped>

.text-4xl{
  color: #FBF6DA;
}

.text-xl{
  color: #FBF6DA;
}

.solutions-page {
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
.solution-card {
  display: block;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}
.solution-card:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-5px); }
.solution-icon {
  width: 56px; height: 56px;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.solution-link { color: #4ade80; font-weight: 600; font-size: 0.9rem; }
.btn-primary {
  display: inline-block; padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25); }
.fade-in-up { opacity: 0; transform: translateY(24px); animation: fadeInUp 0.6s ease forwards; }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
@media (prefers-reduced-motion: reduce) {
  .blob { animation: none; }
  .fade-in-up { animation: none; opacity: 1; transform: none; }
}
</style>
