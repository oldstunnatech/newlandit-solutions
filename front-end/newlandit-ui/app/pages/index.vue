<template>
  <div class="page-root">

    <!-- ============================================================
         HERO
    ============================================================ -->
    <section class="hero-section relative min-h-screen flex flex-col justify-center items-start text-white overflow-hidden">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="blob blob-3"></div>

      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p class="eyebrow-pill mb-6">Smart IT Solutions</p>
        <div class="hero-headline-wrap mb-6">
          <div class="hero-glow-pulse"></div>
          <h1 class="hero-headline" id="hero-headline"></h1>
        </div>
        <p class="text-lg sm:text-xl max-w-2xl mx-auto text-white/80 mb-10 hero-subtitle" id="hero-subtitle">
          Your bridge to tomorrow's technology — reliable IT support, custom software and professional websites.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center hero-cta" id="hero-cta">
          <a href="#contact" class="btn-primary">Plan een kennismaking</a>
          <a href="#services" class="btn-secondary">Our services</a>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs scroll-hint">
        <span>Scroll</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </section>

    <!-- ============================================================
         STATS
    ============================================================ -->
    <section class="stats-section py-12 bg-green-950/60 backdrop-blur-sm border-y border-white/10" data-observe>
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <div class="text-4xl font-extrabold text-green-300 stat-number" :data-target="stat.raw">0{{ stat.suffix }}</div>
          <div class="text-sm text-white/60 mt-1 uppercase tracking-wider">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         CUSTOMERS MARQUEE
    ============================================================ -->
    <section class="customers-section py-20 px-6 text-white text-center" data-observe>
      <p class="eyebrow-pill mb-3">Trusted by</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-3">Our customers</h2>
      <p class="max-w-2xl mx-auto text-white/70 mb-12">
        From local organizations to national institutions — these customers rely on our expertise in software development, IT strategy and project management.
      </p>
      <div class="marquee-track">
        <div class="marquee-inner">
          <div class="marquee-group" v-for="n in 2" :key="n">
            <div class="carousel-logo-card" v-for="item in items" :key="item.image + n">
              <img :src="item.image" class="w-full h-16 object-contain filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         PROCESS STEPS
    ============================================================ -->
    <section class="process-section py-20 px-6 text-white" data-observe>
      <div class="max-w-5xl mx-auto">
        <p class="eyebrow-pill mb-3 block text-center">Our approach</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center mt-3">How we work</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div class="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-green-500/20 z-0"></div>
          <div
            v-for="(step, index) in processSteps"
            :key="step.title"
            class="process-card scroll-child"
            :style="`transition-delay: ${index * 0.12}s`"
          >
            <div class="process-icon">
              <component :is="step.icon" :size="26" :stroke-width="1.5" class="text-green-300" />
            </div>
            <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <h3 class="text-lg font-bold mt-4 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-white/60">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         WHY US + SERVICES
    ============================================================ -->
    <section id="services" class="why-services-section py-20 px-6 text-white" data-observe>
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16">

          <div class="flex-1">
            <p class="eyebrow-pill mb-3">Our values</p>
            <h2 class="text-3xl md:text-4xl font-bold mb-8 mt-3 tracking-tight">Why Newland IT Solutions?</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                v-for="(card, i) in whyCards"
                :key="card.title"
                class="feature-card scroll-child"
                :style="`transition-delay: ${i * 0.1}s`"
              >
                <div class="feature-icon">
                  <component :is="card.icon" :size="22" :stroke-width="1.5" class="text-green-700" />
                </div>
                <h3 class="text-base font-bold mb-1 mt-3">{{ card.title }}</h3>
                <p class="text-sm text-gray-600">{{ card.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex-1">
            <p class="eyebrow-pill mb-3">What we do</p>
            <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-3 tracking-tight">Our services</h2>
            <p class="text-white/70 mb-8 max-w-md">
              We offer a wide range of specialized IT services, tailored to your unique situation — always focused on sustainable digital growth.
            </p>
            <div class="grid grid-cols-1 gap-5">
              <div
                v-for="(service, i) in services"
                :key="service.title"
                class="service-card scroll-child"
                :style="`transition-delay: ${i * 0.1}s`"
              >
                <div class="service-icon">
                  <component :is="service.icon" :size="24" :stroke-width="1.5" class="text-green-300" />
                </div>
                <div>
                  <h3 class="text-base font-bold mb-1">{{ service.title }}</h3>
                  <p class="text-sm text-white/60">{{ service.description }}</p>
                </div>
              </div>
            </div>
            <a href="#contact" class="btn-primary mt-8 inline-block">View all our services →</a>
          </div>

        </div>
      </div>
    </section>

    <!-- ============================================================
         TESTIMONIALS
    ============================================================ -->
    <section class="testimonials-section py-20 px-6 text-white" data-observe>
      <div class="max-w-6xl mx-auto">
        <p class="eyebrow-pill mb-3 block text-center">What clients say</p>
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center mt-3">Testimonials</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(testimonial, i) in testimonials"
            :key="testimonial.name"
            class="testimonial-card scroll-child"
            :style="`transition-delay: ${i * 0.15}s`"
          >
            <div class="stars mb-4">★★★★★</div>
            <p class="text-white/80 text-sm leading-relaxed mb-6">"{{ testimonial.quote }}"</p>
            <div class="flex items-center gap-3">
              <div class="avatar">{{ testimonial.name[0] }}</div>
              <div>
                <div class="font-semibold text-sm">{{ testimonial.name }}</div>
                <div class="text-white/50 text-xs">{{ testimonial.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================================
         CONTACT CTA
    ============================================================ -->
    <section id="contact" class="contact-section py-24 px-6 text-white text-center" data-observe>
      <div class="max-w-2xl mx-auto">
        <p class="eyebrow-pill mb-3">Get in touch</p>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-6 mt-3">Ready to grow your business?</h2>
        <p class="text-white/70 mb-10">Let's talk about how we can help you with IT support, software, or strategy.</p>
        <a href="/contact" class="btn-primary text-lg px-10 py-4">Plan een kennismaking</a>
      </div>
    </section>

    <!-- WhatsApp FAB -->
    <a href="https://wa.me/31648364450" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  SearchIcon,
  ClipboardListIcon,
  SettingsIcon,
  ShieldIcon,
  HandshakeIcon,
  TargetIcon,
  ZapIcon,
  BrainIcon,
  MonitorIcon,
  WrenchIcon,
  TrendingUpIcon,
} from '@lucide/vue'

definePageMeta({ layout: 'default' })

import '~/assets/css/main.css'

const stats = [
  { raw: 50, suffix: '+', label: 'Clients served' },
  { raw: 5,  suffix: 'yr', label: 'Experience' },
  { raw: 98, suffix: '%', label: 'Satisfaction rate' },
  { raw: 24, suffix: 'hr', label: 'Response time' },
]

const processSteps = [
  { icon: SearchIcon,        title: 'Discovery', description: 'We listen, analyse and understand your situation and goals.' },
  { icon: ClipboardListIcon, title: 'Plan',      description: 'We create a clear, tailored roadmap for your project.' },
  { icon: SettingsIcon,      title: 'Build',     description: 'We develop and implement the solution with precision.' },
  { icon: ShieldIcon,        title: 'Support',   description: 'We stay available for ongoing support and improvements.' },
]

const whyCards = [
  { icon: HandshakeIcon, title: 'Clear communication & transparency', description: 'Clear agreements, clear language, no surprises.' },
  { icon: TargetIcon,    title: 'Customization',                      description: 'Solutions tailored to your processes and goals.' },
  { icon: ZapIcon,       title: 'Fast support',                       description: 'Quickly helped remotely or on location.' },
  { icon: BrainIcon,     title: 'Experienced team',                   description: 'From implementation to strategy — one partner.' },
]

const services = [
  { icon: MonitorIcon,    title: 'Software & Automation',  description: 'Smart tools that accelerate and simplify processes.' },
  { icon: WrenchIcon,     title: 'IT Support & Management', description: 'Reliable and secure IT support.' },
  { icon: TrendingUpIcon, title: 'Consultancy & Strategy',  description: 'Strategic digital growth advice.' },
]

const testimonials = [
  { quote: 'Newland IT helped us modernize our entire workflow. Professional, fast and always available.', name: 'Sarah de Vries', company: 'Agape Joy Care' },
  { quote: 'From strategy to implementation — they guided us every step of the way. Highly recommended.',  name: 'Mark Janssen',  company: 'BZVJ' },
  { quote: 'Finally an IT partner that speaks our language. No technical jargon, just clear solutions.',    name: 'Lisa Bakker',   company: 'Flexxes' },
]

const items = [
  { image: '/images/agapejoycare-high-sd2l7h.png.webp' },
  { image: '/images/bzvj-high-1vnsrg.png.webp' },
  { image: '/images/chatgpt-image-may-12-2025-11_00_28-pm-high-high.webp' },
  { image: '/images/color-2x-high.png.webp' },
  { image: '/images/double-asap-greytones-high-xdljy4.png.webp' },
  { image: '/images/flexxes-logo-v5_flexxes-logo-cmyk-black-standard-transparant_1600x-high.webp' },
  { image: '/images/gemeente-amsterdam-4-logo-png-transparent-high.png.webp' },
]

onMounted(() => {
  // ── Hero headline soft reveal ──────────────────────────────────
  const LINE1 = 'Newland'
  const LINE2 = 'IT Solutions'

  const headlineEl = document.getElementById('hero-headline')
  const subtitleEl = document.getElementById('hero-subtitle')
  const ctaEl      = document.getElementById('hero-cta')

  if (headlineEl) {
    headlineEl.innerHTML = ''

    const makeLine = (text: string, gradient = false) => {
      const span = document.createElement('span')
      span.style.display = 'block'
      if (gradient) span.classList.add('hero-gradient-block')
      text.split('').forEach(ch => {
        const s = document.createElement('span')
        s.className = 'hero-char'
        s.textContent = ch === ' ' ? '\u00a0' : ch
        if (gradient) {
          s.style.background = 'linear-gradient(90deg, #34d399, #6ee7b7)'
          s.style.webkitBackgroundClip = 'text'
          s.style.webkitTextFillColor = 'transparent'
          s.style.backgroundClip = 'text'
        }
        span.appendChild(s)
      })
      return span
    }

    const cur = document.createElement('span')
    cur.className = 'hero-cursor'

    const l2 = makeLine(LINE2, true)
    l2.appendChild(cur)

    headlineEl.appendChild(makeLine(LINE1))
    headlineEl.appendChild(l2)

    const allChars = headlineEl.querySelectorAll<HTMLElement>('.hero-char')
    cur.style.opacity = '1'

    allChars.forEach((ch, i) => {
      setTimeout(() => {
        ch.classList.add('visible')
        if (i === allChars.length - 1) {
          setTimeout(() => {
            cur.style.opacity = '0'
            headlineEl.querySelectorAll<HTMLElement>('.hero-gradient-block .hero-char')
              .forEach((gc, gi) => {
                gc.style.animationDelay = `${gi * 0.12}s`
                gc.classList.add('shimmer')
              })
            subtitleEl?.classList.add('visible')
            ctaEl?.classList.add('visible')
          }, 300)
        }
      }, i * 55)
    })
  }

  // ── Intersection observer — scroll reveals ─────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const section = entry.target

      section.classList.add('in-view')
      section.querySelectorAll<HTMLElement>('.scroll-child').forEach(el => {
        el.classList.add('in-view')
      })

      // Count-up for stats
      section.querySelectorAll<HTMLElement>('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target || '0')
        const suffix = el.textContent?.replace(/[0-9]/g, '') || ''
        let current = 0
        const step = Math.ceil(target / 40)
        const interval = setInterval(() => {
          current = Math.min(current + step, target)
          el.textContent = current + suffix
          if (current >= target) clearInterval(interval)
        }, 30)
      })

      observer.unobserve(section)
    })
  }, { threshold: 0.15 })

  document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.page-root {
  background: linear-gradient(160deg, #064e3b 0%, #065f46 40%, #047857 100%);
  min-height: 100vh;
}

/* ── Blobs ── */
.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.35; animation: blobFloat 8s ease-in-out infinite; }
.blob-1 { width: 500px; height: 500px; background: radial-gradient(circle, #10b981, #064e3b); top: -100px; left: -100px; }
.blob-2 { width: 400px; height: 400px; background: radial-gradient(circle, #34d399, #065f46); top: 200px; right: -80px; animation-delay: 3s; }
.blob-3 { width: 300px; height: 300px; background: radial-gradient(circle, #6ee7b7, #047857); bottom: 50px; left: 40%; animation-delay: 5s; }
@keyframes blobFloat {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(30px,-30px) scale(1.05); }
  66%      { transform: translate(-20px,20px) scale(0.95); }
}

/* ── Eyebrow pill ── */
.eyebrow-pill {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #6ee7b7;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
}

/* ── Hero headline animation ── */
.hero-headline-wrap { position: relative; display: inline-block; }
.hero-headline {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  color: white;
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.03em;
}
.hero-glow-pulse {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52,211,153,0.07), transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  animation: glowPulse 4s ease-in-out infinite;
  pointer-events: none;
}
@keyframes glowPulse {
  0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.6; }
  50%      { transform: translate(-50%,-50%) scale(1.3); opacity: 1; }
}
.hero-char {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  white-space: pre;
}
.hero-char.visible { opacity: 1; transform: translateY(0); }
.hero-char.shimmer { animation: softShimmer 2.5s ease-in-out infinite; }
@keyframes softShimmer { 0%,100% { opacity: 1; } 50% { opacity: 0.65; } }
.hero-cursor {
  display: inline-block;
  width: 4px; height: 0.85em;
  background: #34d399;
  margin-left: 3px;
  vertical-align: middle;
  border-radius: 2px;
  opacity: 0;
  transition: opacity 0.3s;
  animation: heroBlink 1.1s ease-in-out infinite;
}
@keyframes heroBlink { 0%,100% { opacity: 0.9; } 50% { opacity: 0.15; } }
.hero-subtitle, .hero-cta {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero-subtitle.visible, .hero-cta.visible { opacity: 1; transform: translateY(0); }
.hero-cta { transition-delay: 0.15s; }

/* ── Scroll hint ── */
.scroll-hint { animation: bounce 2s ease-in-out infinite; }
@keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }

/* ── Section scroll reveals ── */
[data-observe] { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
[data-observe].in-view { opacity: 1; transform: translateY(0); }
.scroll-child { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
.scroll-child.in-view { opacity: 1; transform: translateY(0); }

/* ── Marquee ── */
.marquee-track { overflow: hidden; width: 100%; }
.marquee-inner { display: flex; width: max-content; animation: marquee 28s linear infinite; }
.marquee-inner:hover { animation-play-state: paused; }
.marquee-group { display: flex; align-items: center; gap: 3rem; padding: 0 1.5rem; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.carousel-logo-card { display: flex; align-items: center; justify-content: center; padding: 1rem; height: 80px; width: 140px; flex-shrink: 0; }

/* ── Process cards ── */
.process-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.25rem;
  padding: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: background 0.2s, transform 0.2s, opacity 0.5s ease;
}
.process-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
.process-icon {
  width: 56px; height: 56px;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.step-number { font-size: 0.7rem; font-weight: 700; color: #34d399; letter-spacing: 0.15em; margin-top: 0.75rem; }

/* ── Feature cards ── */
.feature-card {
  background: white;
  color: #1a1a1a;
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.5s ease;
}
.feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.15); }
.feature-icon {
  width: 40px; height: 40px;
  background: rgba(6,78,59,0.08);
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Service cards ── */
.service-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 1.25rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: background 0.2s, transform 0.2s, opacity 0.5s ease;
}
.service-card:hover { background: rgba(255,255,255,0.13); transform: translateX(6px); }
.service-icon {
  width: 44px; height: 44px;
  background: rgba(52,211,153,0.1);
  border: 1px solid rgba(52,211,153,0.2);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ── Testimonials ── */
.testimonial-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: transform 0.2s, background 0.2s, opacity 0.5s ease;
}
.testimonial-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.1); }
.stars { color: #fbbf24; letter-spacing: 2px; font-size: 1rem; }
.avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #34d399, #059669);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 1rem; color: white; flex-shrink: 0;
}

/* ── Contact CTA ── */
.contact-section { background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.08); }

/* ── Buttons ── */
.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: white; color: #064e3b; font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
.btn-secondary {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 2px solid rgba(255,255,255,0.4); color: white; font-weight: 600;
  border-radius: 0.75rem;
  transition: background 0.2s, border-color 0.2s;
  text-decoration: none;
}
.btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }

/* ── WhatsApp FAB ── */
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
.whatsapp-label { display: none; }
@media (min-width: 640px) { .whatsapp-label { display: inline; } }

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .blob, .hero-glow-pulse, .hero-cursor, .scroll-hint, .marquee-inner { animation: none; }
  .hero-char { transition: none; opacity: 1; transform: none; }
  .hero-subtitle, .hero-cta { opacity: 1; transform: none; transition: none; }
  [data-observe], .scroll-child { opacity: 1; transform: none; transition: none; }
}
</style>
