<template>
  <section class="about-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <!-- HERO -->
    <div class="relative z-10 min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-16">
      <p class="eyebrow-pill mb-4">Who we are</p>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Technology that works <span class="text-gradient">for people</span>
      </h1>
      <p class="text-white/70 text-lg max-w-2xl mx-auto">
        Since 2021 we've been helping companies and individuals in Amsterdam and beyond turn complex IT challenges into clear, lasting solutions.
      </p>
    </div>

    <!-- STATS -->
    <div class="relative z-10 py-10 bg-green-950/60 backdrop-blur-sm border-y border-white/10">
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="text-4xl font-extrabold text-green-300">{{ stat.value }}</div>
          <div class="text-xs text-white/60 mt-1 uppercase tracking-wider">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- MISSION / VISION / STRATEGY -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <p class="eyebrow-pill mb-4">Our foundation</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold">What drives us</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(card, i) in mvs" :key="card.title" class="mvs-card fade-in-up" :style="`animation-delay: ${i * 0.15}s`">
          <div class="mvs-icon">
            <component :is="card.icon" :size="28" :stroke-width="1.5" class="text-green-300" />
          </div>
          <h3 class="text-xl font-bold mt-5 mb-3">{{ card.title }}</h3>
          <p class="text-white/65 text-sm leading-relaxed">{{ card.body }}</p>
        </div>
      </div>
    </div>

    <!-- TIMELINE -->
    <div class="relative z-10 py-24 bg-green-950/40 border-y border-white/10">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-14">
          <p class="eyebrow-pill mb-4">Our journey</p>
          <h2 class="text-3xl sm:text-4xl font-extrabold">How we got here</h2>
        </div>
        <div class="timeline">
          <div v-for="(event, i) in timeline" :key="event.year" class="timeline-item fade-in-up" :style="`animation-delay: ${i * 0.12}s`">
            <div class="timeline-year">{{ event.year }}</div>
            <div class="timeline-connector">
              <div class="timeline-dot"></div>
              <div class="timeline-line" v-if="i < timeline.length - 1"></div>
            </div>
            <div class="timeline-content">
              <h3 class="font-bold text-base mb-1">{{ event.title }}</h3>
              <p class="text-white/60 text-sm leading-relaxed">{{ event.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- VALUES -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div class="text-center max-w-2xl mx-auto mb-14">
        <p class="eyebrow-pill mb-4">Our values</p>
        <h2 class="text-3xl sm:text-4xl font-extrabold">What we stand for</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(value, i) in values" :key="value.title" class="value-card fade-in-up" :style="`animation-delay: ${i * 0.1}s`">
          <div class="value-icon">
            <component :is="value.icon" :size="26" :stroke-width="1.5" class="text-green-300" />
          </div>
          <h3 class="font-bold text-base mt-4 mb-2">{{ value.title }}</h3>
          <p class="text-white/60 text-sm leading-relaxed">{{ value.description }}</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="relative z-10 py-24 px-6 text-center">
      <div class="max-w-2xl mx-auto">
        <p class="eyebrow-pill mb-4">Let's work together</p>
        <h2 class="text-3xl sm:text-5xl font-extrabold mb-6">Ready to move your business forward?</h2>
        <p class="text-white/70 mb-10 text-lg">Tell us what you're working on we'll get back to you within 3 business day.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" class="btn-primary">Plan een kennismaking</a>
          <a href="/#services" class="btn-secondary">View our services</a>
        </div>
      </div>
    </div>

    <!-- WhatsApp FAB -->
    <a href="https://wa.me/31648364450" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>
  </section>
</template>

<script setup lang="ts">
import {
  TargetIcon,
  EyeIcon,
  BarChart2Icon,
  HandshakeIcon,
  SettingsIcon,
  ZapIcon,
  BrainIcon,
} from '@lucide/vue'

definePageMeta({
  layout: 'default',
})

const stats = [
  { value: '50+', label: 'Clients served' },
  { value: '5yr', label: 'Experience' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '72hr', label: 'Response time' },
]

const mvs = [
  {
    icon: TargetIcon,
    title: 'Mission',
    body: 'At Newland IT-Solutions, the customer is central. We help companies and individuals in Amsterdam and the surrounding area with smart IT solutions that accelerate digitization and simplify processes. Our approach is personal and accessible: technology must work for the customer.',
  },
  {
    icon: EyeIcon,
    title: 'Vision',
    body: 'We make technology understandable and applicable not only for large organizations, but also for freelancers, schools and teams in Amsterdam and North Holland. With knowledge sharing and customization, we help customers work faster, grow more efficiently and be ready for the digital future.',
  },
  {
    icon: BarChart2Icon,
    title: 'Strategy',
    body: 'As an IT agency in Amsterdam, we develop customized IT solutions that are scalable and user-friendly. In addition, we help organizations refine their digital strategy by clearly mapping complex issues and realizing efficient solutions.',
  },
]

const timeline = [
  {
    year: '2025',
    title: 'Growing the team & platform',
    description: 'Investing in our own platform and tooling to deliver faster, more consistent results for clients across all service lines.',
  },
  {
    year: '2024',
    title: 'Trusted by 50+ clients',
    description: 'Reached a milestone of 50+ active clients from freelancers and schools to national institutions with a 98% satisfaction rate.',
  },

  {
    year: '2023',
    title: 'Expanded service offering',
    description: 'Added software development and consultancy services, enabling us to guide clients from strategy all the way through to implementation.',
  },
  {
    year: '2022',
    title: 'First major clients',
    description: 'Grew our portfolio to include local organizations and SMEs across Amsterdam and North Holland, delivering IT support, automation and strategy.',
  },

  {
    year: '2021',
    title: 'Founded in Amsterdam',
    description: 'Newland IT-Solutions was established with a clear mission: make technology personal, accessible, and effective for businesses of every size.',
  },
]

const values = [
  {
    icon: HandshakeIcon,
    title: 'Transparency',
    description: "Clear agreements, plain language, no surprises. You always know what we're doing and why.",
  },
  {
    icon: SettingsIcon,
    title: 'Customization',
    description: 'No off the shelf thinking. Every solution is tailored to your specific processes and goals.',
  },
  {
    icon: ZapIcon,
    title: 'Responsiveness',
    description: "Fast, reliable support remotely or on location. We're there when it matters.",
  },
  {
    icon: BrainIcon,
    title: 'Expertise',
    description: 'From hands on implementation to high-level strategy one partner across the full stack.',
  },
]
</script>

<style scoped>
.about-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}
.blob {
  position: absolute; border-radius: 50%;
  filter: blur(80px); opacity: 0.3;
  animation: blobFloat 8s ease-in-out infinite;
}
.blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, #1d8044, #0d4226); top: -100px; left: -100px; }
.blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, #22c55e, #156534); top: 40%; right: -80px; animation-delay: 3s; }
.blob-3 { width: 300px; height: 300px; background: radial-gradient(circle, #4ade80, #1d8044); bottom: 10%; left: 30%; animation-delay: 5s; }
@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
}
.text-gradient {
  background: linear-gradient(90deg, #22c55e, #4ade80);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
.stat-item { transition: transform 0.2s; }
.stat-item:hover { transform: translateY(-4px); }
.mvs-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.5rem;
  color: #FBF6DA;
  padding: 2rem;
  text-align: center;
  transition: background 0.2s, transform 0.2s;
}
.mvs-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-5px); }
.mvs-icon {
  width: 64px; height: 64px;
  margin: 0 auto;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.timeline { display: flex; flex-direction: column; }
.timeline-item { display: grid; grid-template-columns: 72px 32px 1fr; gap: 0 1rem; align-items: start; }
.timeline-year { text-align: right; font-weight: 800; font-size: 0.9rem; color: #22c55e; padding-top: 2px; letter-spacing: 0.05em; }
.timeline-connector { display: flex; flex-direction: column; align-items: center; }
.timeline-dot { width: 14px; height: 14px; border-radius: 50%; background: #22c55e; border: 2px solid #156534; flex-shrink: 0; margin-top: 3px; }
.timeline-line { width: 2px; flex: 1; background: rgba(52,211,153,0.25); min-height: 40px; }
.timeline-content { padding-bottom: 2rem; }
.value-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.25rem;
  padding: 1.5rem;
  transition: background 0.2s, transform 0.2s;
}
.value-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
.value-icon {
  width: 48px; height: 48px;
  background: rgba(52,211,153,0.1);
  border: 1px solid rgba(52,211,153,0.25);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-primary {
  display: inline-block; padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem; box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s; text-decoration: none;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
.btn-secondary {
  display: inline-block; padding: 0.75rem 2rem;
  border: 2px solid rgba(255,255,255,0.4); color: #fbf6da;
  font-weight: 600; border-radius: 0.75rem;
  transition: background 0.2s, border-color 0.2s; text-decoration: none;
}
.btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }
.fade-in-up { opacity: 0; transform: translateY(24px); animation: fadeInUp 0.6s ease forwards; }
@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

.text-4xl{
  color: #FBF6DA;
}
.text-3xl{
  color: #FBF6DA;
}

.font-bold{
  color: #FBF6DA;
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
  .blob { animation: none; }
  .fade-in-up { animation: none; opacity: 1; transform: none; }
}
</style>
