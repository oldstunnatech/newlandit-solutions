<template>
  <div class="page-root">

    <!-- ============================================================
         HERO
    ============================================================ -->
    <section class="hero-section relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">

  <!-- Animated grid background -->
  <!-- <div class="hero-grid" aria-hidden="true"></div> -->

  <!-- Glowing orbs -->
  <!-- <div class="orb orb-1" aria-hidden="true"></div>
  <div class="orb orb-2" aria-hidden="true"></div>
  <div class="orb orb-3" aria-hidden="true"></div> -->

  <!-- Floating particles -->
  <!-- <div class="particles" aria-hidden="true">
    <span v-for="i in 20" :key="i" class="particle" :style="`--i:${i}`"></span>
  </div> -->

  <!-- Scanning line -->
  <!-- <div class="scan-line" aria-hidden="true"></div> -->

  <!-- Cursor follower -->
<!-- <div class="cursor-glow" id="cursor-glow" aria-hidden="true"></div>
<div class="cursor-ring" id="cursor-ring" aria-hidden="true"></div> -->

  <!-- Content -->
  <div class="relative z-10 text-center px-6 max-w-5xl mx-auto hero-content">


    

    <!-- Headline -->
    <div class="hero-headline-wrap mb-6">
      <div class="hero-glow-pulse"></div>
      <h1 class="hero-headline" id="hero-headline"></h1>
    </div>

    <!-- Badge -->
    <div class="hero-badge mb-8">
      <span class="badge-dot"></span>
      <span>Smart IT solutions for growing companies in Amsterdam</span>
      <span class="badge-dot"></span>
    </div>

    <!-- Subtitle -->
    <p class="text-lg sm:text-xl max-w-2xl mx-auto text-white/60 mb-10 hero-subtitle" id="hero-subtitle">
    We help freelancers and small businesses in Amsterdam and the surrounding area with reliable IT support, custom software, and professional websites, without complicated technical language.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center hero-cta" id="hero-cta">
      <a href="#contact" class="btn-primary hero-btn-main">
        <span>Plan een kennismaking</span>
        <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
      <a href="#services1" class="btn-secondary">Our services</a>
    </div>

    <!-- Stats row -->
    
  </div>

  <!-- Scroll indicator -->
  <!-- <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs scroll-hint">
    <span>Scroll</span>
    <div class="scroll-mouse">
      <div class="scroll-wheel"></div>
    </div>
  </div> -->
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
  <p class="eyebrow-pill2 mb-3">Trusted by</p>
  <h2 class="text-3xl1 md:text-4xl font-bold mb-4 mt-3">Our customers</h2>
  <p class="max-w-2xl mx-auto text-white/70 mb-12">
    From local organizations to national institutions these customers rely on our expertise in software development, IT strategy and project management.
  </p>

  <div class="marquee-track" :class="{ 'marquee-paused': activeReview !== null }">
    <div class="marquee-inner">
      <div class="marquee-group" v-for="n in 2" :key="n">
        <div
          v-for="(item, idx) in items"
          :key="item.image + n"
          class="carousel-logo-card"
          :class="{ 'carousel-logo-card--hoverable': item.quote }"
          @mouseenter="item.quote && openReview(n + '-' + idx)"
          @mouseleave="item.quote && closeReview()"
          @click="item.quote && toggleReview(n + '-' + idx)"
        >
          <img :src="item.image" class="logo-img" />

          <!-- Slide-down review -->
          <Transition name="slide-review">
            <div
              v-if="item.quote && activeReview === n + '-' + idx"
              class="review-dropdown"
            >
              <div class="review-arrow"></div>
              <p class="review-quote">"{{ item.quote }}"</p>
              <p class="review-author">— {{ item.author }}, {{ item.company }}</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</section>

     <!-- ============================================================
         WHY US + SERVICES
    ============================================================ -->
    <section id="services" class="why-services-section py-20 px-6" data-observe>
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16">

          <div class="flex-1">
             <p class="eyebrow-pill3 mb-3">Our values</p>
            <h2 class="text-3xl2 md:text-4xl font-bold mb-8 mt-3 tracking-tight">Why Newland IT Solutions?</h2>
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

          

        </div>
      </div>
    </section>


    <!-- ============================================================
         PROCESS STEPS
    ============================================================ -->
    <section class="process-section py-20 px-6 text-white" data-observe>
      <div class="max-w-5xl mx-auto">
        <p class="eyebrow-pill4 mb-3 block text-center">Our approach</p>
        <h2 class="text-3xl3 md:text-4xl font-bold mb-16 text-center mt-3">Who are we here for?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div class="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"></div>
          <div
            v-for="(step, index) in offerSteps"
            :key="step.title"
            class="process-card scroll-child"
            :style="`transition-delay: ${index * 0.12}s`"
          >
            <div class="process-icon">
              <component :is="step.icon" :size="26" :stroke-width="1.5" class="text-green-300" />
            </div>
            <!-- <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div> -->
            <h3 class="text-lg font-bold mt-4 mb-2">{{ step.title }}</h3>
            <p class="text-sm text-white/60">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- <p class="eyebrow-pill4 mb-3 block text-center">Our approach</p> -->
        <h2 class="text-3xl3 md:text-4xl font-bold mb-16 text-center mt-10">What we offer</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div class="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"></div>
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

    <section id="services1" class="why-services-section2 py-20 px-6" data-observe>
  <div class="flex-1">
    <p class="eyebrow-pill5 mb-3">What we do</p>
    <h2 class="text-3xl4 md:text-4xl font-bold mb-4 mt-3 tracking-tight">Our services</h2>
    <p class="service-text mb-8 text-white/70">
      We offer a wide range of specialized IT services, tailored to your unique situation always focused on sustainable digital growth.
    </p>
    <div class="grid grid-cols-1 gap-5 mt-10">
      <div
        v-for="(service, i) in services"
        :key="service.title"
        class="service-card scroll-child"
        :style="`transition-delay: ${i * 0.1}s; background-image: url('${service.image}')`"
      >
        <div class="service-card-overlay">
          <div class="service-icon">
            <component :is="service.icon" :size="24" :stroke-width="1.5" class="text-green-300" />
          </div>
          <div>
            <h3 class="text-base font-bold mb-1 mt-10">{{ service.title }}</h3>
            <p class="text-sm text-white/60">{{ service.description }}</p>
            <NuxtLink :to="service.href" class="btn-secondary11 mt-4 inline-block"> {{ service.button }}</NuxtLink>
            
            
            <!-- <a href="/solutions" class="btn-primary11 mt-8 inline-block">{{ service.button }}</a> -->
          </div>
        </div>
      </div>
    </div>
    <a href="/solutions" class="btn-primary1 mt-8 inline-block">View all our services →</a>
  </div>
</section>

   

    <!-- ============================================================
         TESTIMONIALS
    ============================================================ -->
    <section class="testimonials-section py-20 px-6 text-white" data-observe>
      
      <!-- <div class="max-w-6xl mx-auto">
        <p class="eyebrow-pill6 mb-3 block text-center">What clients say</p>
        <h2 class="text-3xl5 md:text-4xl font-bold mb-12 text-center mt-3">Testimonials</h2>
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
      </div> -->
    </section>

    <!-- ============================================================
         CONTACT CTA
    ============================================================ -->
    <section id="contact" class="contact-section py-24 px-6 text-white text-center" data-observe>
      <div class="max-w-2xl mx-auto">
        <p class="eyebrow-pill7 mb-3">Get in touch</p>
        <h2 class="text-3xl6 md:text-5xl font-extrabold mb-6 mt-3">Ready to grow your business?</h2>
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

const heroStats = [
  { val: '50+', label: 'Clients served' },
  { val: '5yr', label: 'Experience' },
  { val: '98%', label: 'Satisfaction' },
]

const stats = [
  { raw: 50, suffix: '+', label: 'Clients served' },
  { raw: 5,  suffix: 'yr', label: 'Experience' },
  { raw: 98, suffix: '%', label: 'Satisfaction rate' },
  { raw: 72, suffix: 'hr', label: 'Response time' },
]

const offerSteps = [
  { icon: SearchIcon,        title: 'Personal approach', description: 'We believe in short lines of communication and clear communication. We get to know your challenges and help find solutions that work.' },
  { icon: ClipboardListIcon, title: 'Experience & expertise',      description: 'With years of experience in web development, consultancy, and IT support, we help organizations grow in efficiency and stability.' },
  { icon: SettingsIcon,      title: 'Flexible solutions',     description: 'From small assignments to ongoing support our approach adapts to your organization.' },
  { icon: ShieldIcon,        title: 'Customer-oriented & reliable',   description: 'Your success is our priority. We ensure that our solutions demonstrably contribute to your processes and business goals.' },
]

const processSteps = [
  { icon: SearchIcon,        title: 'Discovery', description: 'We listen, analyze and understand your situation and goals.' },
  { icon: ClipboardListIcon, title: 'Plan',      description: 'We create a clear, tailored roadmap for your project.' },
  { icon: SettingsIcon,      title: 'Build',     description: 'We develop and implement the solution with precision.' },
  { icon: ShieldIcon,        title: 'Support',   description: 'We stay available for ongoing support and improvements.' },
]

const whyCards = [
  { icon: HandshakeIcon, title: 'Clear communication & transparency', description: 'Clear agreements, clear language, no surprises.' },
  { icon: TargetIcon,    title: 'Customization',                      description: 'Solutions tailored to your processes and goals.' },
  { icon: ZapIcon,       title: 'Fast support',                       description: 'Quickly helped remotely or on location.' },
  { icon: BrainIcon,     title: 'Experienced team',                   description: 'From implementation to strategy one partner.' },
]

const services = [
  {
    icon: MonitorIcon,
    title: 'Software & Automation',
    description: 'Smart tools that accelerate and simplify processes. We build solutions that really work from data management to workflow optimization.',
    image: '/images/startup-programmer-testing-debugging-company-ai-software.jpg',
    button: 'More about Development',
    href: '/solutions/software-development',
  },
  {
    icon: WrenchIcon,
    title: 'IT Support & Management',
    description: 'Immediate assistance with malfunctions, maintenance, and security. Remote or on-site, we ensure your systems remain stable and secure.',
    image: '/images/employees-looking-financial-statistics-computer.jpg',
    button: 'More about IT Support',
    href: '/solutions/it-consulting',
  },
  {
    icon: TrendingUpIcon,
    title: 'Consultancy & Strategy',
    description: 'Strategic advice for digital transformation and scalable growth. We ensure that your technology supports your ambitions.',
    image: '/images/diverse-coworkers-talking-with-customers.jpg',
    button: 'More about Strategy',
    href: '/solutions/digital-strategy',

  },
]

const testimonials = [
  { quote: 'Newland IT helped us modernize our entire workflow. Professional, fast and always available.', name: 'Sarah de Vries', company: 'Agape Joy Care' },
  { quote: 'From strategy to implementation — they guided us every step of the way. Highly recommended.',  name: 'Mark Janssen',  company: 'BZVJ' },
  { quote: 'Finally an IT partner that speaks our language. No technical jargon, just clear solutions.',    name: 'Lisa Bakker',   company: 'Flexxes' },
]

const items = [
  {
    image: '/images/agapejoycare-high-sd2l7h.png.webp',
    quote: 'Newland IT helped us modernize our entire workflow. Professional, fast and always available.',
    author: 'Sarah de Vries',
    company: 'Agape Joy Care',
  },
  {
    image: '/images/bzvj-high-1vnsrg.png.webp',
    quote: 'From strategy to implementation — they guided us every step of the way. Highly recommended.',
    author: 'Mark Janssen',
    company: 'BZVJ',
  },
  { image: '/images/chatgpt-image-may-12-2025-11_00_28-pm-high-high.webp' },
  { image: '/images/color-2x-high.png.webp' },
  { image: '/images/double-asap-greytones-high-xdljy4.png.webp' },
  {
    image: '/images/flexxes-logo-v5_flexxes-logo-cmyk-black-standard-transparant_1600x-high.webp',
    quote: 'Finally an IT partner that speaks our language. No technical jargon, just clear solutions.',
    author: 'Lisa Bakker',
    company: 'Flexxes',
  },
  { image: '/images/gemeente-amsterdam-4-logo-png-transparent-high.png.webp' },
]

import { ref } from 'vue'

const activeReview = ref<string | null>(null)

function openReview(key: string) {
  activeReview.value = key
}

function closeReview() {
  activeReview.value = null
}

function toggleReview(key: string) {
  activeReview.value = activeReview.value === key ? null : key
}

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
          s.style.background = 'linear-gradient(90deg, #22c55e, #4ade80)'
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
            const statsEl = document.getElementById('hero-stats')
            setTimeout(() => { statsEl?.classList.add('visible') }, 800)
          }, 300)
        }
      }, i * 55)
    })
  }

 // ── Testimonial popup positioning ──────────────────────────────
const popup     = document.getElementById('testimonial-popup') as HTMLElement
const quoteEl   = document.getElementById('popup-quote') as HTMLElement
const authorEl  = document.getElementById('popup-author') as HTMLElement

if (popup) {
  document.querySelectorAll<HTMLElement>('.carousel-logo-card--hoverable').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const quote  = card.dataset.quote  || ''
      const author = card.dataset.author || ''

      quoteEl.textContent  = `"${quote}"`
      authorEl.textContent = `— ${author}`

      popup.style.display  = 'block'
      popup.style.position = 'fixed'
      popup.style.zIndex   = '99999'

      requestAnimationFrame(() => {
        const rect       = card.getBoundingClientRect()
        const popupWidth = popup.offsetWidth || 260
        const viewportW  = window.innerWidth

        let left = rect.left + rect.width / 2 - popupWidth / 2
        left = Math.max(8, Math.min(left, viewportW - popupWidth - 8))

        const img = card.querySelector('img')
        const imgRect = img ? img.getBoundingClientRect() : rect

        popup.style.left = `${left}px`
        popup.style.top  = `${imgRect.bottom + 6}px`
      })
    })

    card.addEventListener('mouseleave', () => {
      popup.style.display = 'none'
    })
  })
}

  // ── Cursor magnetic glow ───────────────────────────────────────
  const heroSection = document.querySelector('.hero-section') as HTMLElement
  const cursorGlow  = document.getElementById('cursor-glow')
  const cursorRing  = document.getElementById('cursor-ring')

  if (heroSection && cursorGlow && cursorRing) {
    let glowX = 0, glowY = 0
    let ringX = 0, ringY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      glowX = x
      glowY = y

      cursorGlow.style.left      = `${x}px`
      cursorGlow.style.top       = `${y}px`
      cursorGlow.style.transform = 'translate(-50%, -50%)'
      cursorGlow.style.opacity   = '1'

      cancelAnimationFrame(rafId)
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t

      const animateRing = () => {
        ringX = lerp(ringX, glowX, 0.12)
        ringY = lerp(ringY, glowY, 0.12)
        cursorRing.style.left      = `${ringX}px`
        cursorRing.style.top       = `${ringY}px`
        cursorRing.style.transform = 'translate(-50%, -50%)'
        cursorRing.style.opacity   = '1'
        if (Math.abs(ringX - glowX) > 0.5 || Math.abs(ringY - glowY) > 0.5) {
          rafId = requestAnimationFrame(animateRing)
        }
      }
      rafId = requestAnimationFrame(animateRing)

      // Tilt the headline slightly
      const headlineWrap = document.querySelector('.hero-headline-wrap') as HTMLElement
      if (headlineWrap) {
        const tiltX = (y / rect.height - 0.5) * -6
        const tiltY = (x / rect.width  - 0.5) *  6
        headlineWrap.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
      }
    }

    const onMouseLeave = () => {
      cursorGlow.style.opacity = '0'
      cursorRing.style.opacity = '0'
      const headlineWrap = document.querySelector('.hero-headline-wrap') as HTMLElement
      if (headlineWrap) headlineWrap.style.transform = ''
    }

    heroSection.addEventListener('mousemove', onMouseMove)
    heroSection.addEventListener('mouseleave', onMouseLeave)
  }

  // ── Intersection observer — scroll reveals ─────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const section = entry.target
      section.classList.add('in-view')
      section.querySelectorAll<HTMLElement>('.scroll-child').forEach(el => el.classList.add('in-view'))

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
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}

/* ── Hero content — large screen centering ── */

 .hero-section {
  background:
    linear-gradient(160deg, rgba(13, 66, 38, 0.75) 0%, rgba(21, 101, 52, 0.65) 50%, rgba(29, 128, 68, 0.70) 100%),
    url('/images/IMG_8959.jpg') center center / cover no-repeat;
  min-height: 100vh;
  position: relative;
}

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* Account for sidebar width (288px = w-72) */
    padding-left: calc(288px * 0.1);
    padding-right: 2rem;
  }

  .hero-badge {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-headline-wrap {
    width: 100%;
    text-align: center;
  }

  .hero-headline {
    text-align: center;
    width: 100%;
  }

  .hero-subtitle {
    text-align: center;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-stats {
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }


@media (min-width: 1280px) {
  .hero-content {
    /* Fine-tune centering on XL screens */
    padding-left: calc(288px * 0.15);
  }
}

/* ── Hero Grid ── */
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(34,197,94,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,197,94,0.07) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridDrift 20s linear infinite;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
}
@keyframes gridDrift {
  0% { transform: translate(0, 0); }
  100% { transform: translate(60px, 60px); }
}

/* ── Orbs ── */
.orb {
  position: absolute; border-radius: 50%;
  filter: blur(80px); pointer-events: none;
  animation: orbFloat ease-in-out infinite;
}
.orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(34,197,94,0.25), rgba(13,66,38,0.1));
  top: -150px; left: -150px;
  animation-duration: 10s;
}
.orb-2 {
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(74,222,128,0.2), transparent);
  top: 30%; right: -100px;
  animation-duration: 13s; animation-delay: 3s;
}
.orb-3 {
  width: 350px; height: 350px;
  background: radial-gradient(circle, rgba(21,101,52,0.4), transparent);
  bottom: 0; left: 30%;
  animation-duration: 9s; animation-delay: 5s;
}
@keyframes orbFloat {
  0%,100% { transform: translate(0,0) scale(1); }
  33% { transform: translate(30px,-40px) scale(1.08); }
  66% { transform: translate(-25px,25px) scale(0.95); }
}

/* ── Particles ── */
.particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.particle {
  position: absolute;
  width: calc(2px + (var(--i) * 0.15px));
  height: calc(2px + (var(--i) * 0.15px));
  background: #4ade80;
  border-radius: 50%;
  left: calc((var(--i) * 4.7%) + 2%);
  top: calc((var(--i) * 4.3%) + 5%);
  opacity: 0;
  animation: particleFly calc(4s + (var(--i) * 0.3s)) ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.25s);
  box-shadow: 0 0 6px rgba(74,222,128,0.6);
}
@keyframes particleFly {
  0% { opacity: 0; transform: translateY(0) scale(0.5); }
  20% { opacity: 0.8; }
  80% { opacity: 0.4; }
  100% { opacity: 0; transform: translateY(-80px) scale(1.2); }
}

/* ── Scan line ── */
.scan-line {
  position: absolute; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(34,197,94,0.4), rgba(74,222,128,0.8), rgba(34,197,94,0.4), transparent);
  animation: scanDown 6s ease-in-out infinite;
  pointer-events: none;
  box-shadow: 0 0 20px rgba(74,222,128,0.4);
}
@keyframes scanDown {
  0% { top: -2px; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

/* ── Hero badge ── */
.hero-badge {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.3);
  border-radius: 9999px;
  padding: 0.4rem 1.2rem;
  font-size: 0.8rem; font-weight: 700;
  color: #4ade80;
  letter-spacing: 0.15em; text-transform: uppercase;
  opacity: 0; animation: fadeInDown 0.8s ease 0.2s forwards;
}
.badge-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 8px rgba(74,222,128,0.8);
  animation: badgePulse 2s ease infinite;
}
@keyframes badgePulse {
  0%,100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ── Hero headline animation ── */
.hero-headline-wrap { position: relative; display: inline-block; }
.hero-headline {
  font-size: clamp(3.5rem, 10vw, 7rem);
  font-weight: 900;
  color: #FBF6DA;
  line-height: 1.05;
  margin: 0;
  letter-spacing: -0.03em;
}
.hero-glow-pulse {
  position: absolute;
  width: 500px; height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(52,211,153,0.1), transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  animation: glowPulse 4s ease-in-out infinite;
  pointer-events: none;
}
@keyframes glowPulse {
  0%,100% { transform: translate(-50%,-50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%,-50%) scale(1.4); opacity: 1; }
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
  background: #22c55e;
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

/* ── Hero CTA button upgrade ── */
.hero-btn-main {
  display: inline-flex !important;
  align-items: center;
  box-shadow: 0 0 30px rgba(34,197,94,0.3);
}
.hero-btn-main:hover {
  box-shadow: 0 0 50px rgba(34,197,94,0.5) !important;
}

/* ── Hero stats ── */
.hero-stats {
  display: flex; justify-content: center;
  gap: 3rem; flex-wrap: wrap;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding-top: 2rem;
}
.hero-stats.visible { opacity: 1; transform: translateY(0); }
.hero-stat { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; }
.hero-stat-val {
  font-size: 2rem; font-weight: 900; color: #4ade80;
  line-height: 1;
  text-shadow: 0 0 20px rgba(74,222,128,0.5);
}
.hero-stat-label {
  font-size: 0.7rem; color: rgba(255,255,255,0.5);
  text-transform: uppercase; letter-spacing: 0.1em;
}

/* ── Scroll indicator ── */
.scroll-hint { animation: bounceY 2s ease-in-out infinite; }
@keyframes bounceY {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(6px); }
}
.scroll-mouse {
  width: 22px; height: 36px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 11px;
  display: flex; justify-content: center;
  padding-top: 5px;
}
.scroll-wheel {
  width: 3px; height: 7px;
  background: rgba(255,255,255,0.5);
  border-radius: 2px;
  animation: wheelScroll 2s ease infinite;
}
@keyframes wheelScroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}
/* ── Scroll hint ── */
.scroll-hint { animation: bounce 2s ease-in-out infinite; }
@keyframes bounce { 0%,100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }

/* ── Section scroll reveals ── */
[data-observe] { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
[data-observe].in-view { opacity: 1; transform: translateY(0); }
.scroll-child { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
.scroll-child.in-view { opacity: 1; transform: translateY(0); }

/* ── Marquee ── */
.marquee-track { overflow: hidden; position: relative; }
.marquee-inner {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
}

.marquee-paused .marquee-inner {
  animation-play-state: paused !important;
  overflow: visible;
  clip-path: inset(0 0 -200px 0);
}

.marquee-paused {
  overflow: visible;
  clip-path: inset(0 1px -200px 1px);
}

.marquee-inner:hover { animation-play-state: paused; }
.marquee-group { display: flex; align-items: center; gap: 2rem; padding: 0 1rem; overflow: visible; }
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* Logo card needs relative positioning for the dropdown */
.carousel-logo-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-shrink: 0;
  width: 160px;
}

.carousel-logo-card--hoverable {
  cursor: pointer;
}

.logo-img {
  width: 500%;
  height: 350px;
  object-fit: contain;
  opacity: 0.85;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.carousel-logo-card--hoverable:hover .logo-img {
  opacity: 1;
  transform: scale(1.05);
}

.review-arrow {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid rgba(74, 222, 128, 0.4);
}

/* Slide-down review card */
.review-dropdown {
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  max-width: calc(100vw - 280px); /* 280px accounts for the sidebar width */
  background: rgba(13, 66, 38, 0.97);
  border: 1px solid rgba(74, 222, 128, 0.35);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  text-align: left;
  z-index: 9999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  white-space: normal;
  word-break: break-word;
  margin-top: -80px;
}

.review-quote {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 0.5rem;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
}

.review-author {
  font-size: 0.75rem;
  color: #4ade80;
  font-weight: 600;
}

/* Slide transition */
.slide-review-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.slide-review-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-review-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}
.slide-review-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}


.customers-section {
  position: relative;
}

.page-root {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
  overflow-x: hidden;
}

.carousel-logo-card--hoverable:hover .testimonial-popup {
  opacity: 1;
}

.carousel-logo-card--testimonial {
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1.25rem 1.5rem;
  width: 260px;
  height: auto;
  gap: 0.75rem;
}

.testimonial-quote {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 0.6rem;
  white-space: normal;
  word-break: break-word;
}

.testimonial-author {
  font-size: 0.75rem;
  color: #4ade80;
  font-weight: 600;
  white-space: nowrap;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── Eyebrow pill ── */
.eyebrow-pill1 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  
}

.eyebrow-pill2 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  
}
.eyebrow-pill3 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 520px;
  
}
.eyebrow-pill4 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 425px;

  
}
.eyebrow-pill5 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 505px;
  
}
.eyebrow-pill6 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 475px;
  
}

.eyebrow-pill7 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 0px;
  
}

/* ── Process cards ── */

.process-section{
  color: #FBF6DA;
}
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
.step-number { font-size: 0.7rem; font-weight: 700; color: #22c55e; letter-spacing: 0.15em; margin-top: 0.75rem; }


.why-services-section {
  color: #FBF6DA;
}
.why-services-section2 {
  color: #FBF6DA;
}



/* ── Feature cards ── */
.feature-card {
  background: #FBF6DA;
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
.text-3xl1{
  color: #FBF6DA;
  margin-left: 0px;
}
.text-3xl2{
  color: #FBF6DA;
  margin-left: 365px;
}
.text-3xl3{
  color: #FBF6DA;
  margin-left: 0px;
}
.text-3xl4{
  color: #FBF6DA;
  margin-left: 485px;
}
.text-3xl5{
  color: #FBF6DA;
  margin-left: 0px;
}

.text-3xl6{
  color: #FBF6DA;
  margin-left: 0px;
}

.service-text{
  margin-left: 130px;
}



/* ── Service cards ── */
.service-card {
  border: none;
  border-radius: 1.25rem;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s, opacity 0.5s ease;
  min-height: 250px;
}
.service-card:hover {
  transform: translateX(6px);
}
.service-card-overlay {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: linear-gradient(
    135deg,
    rgba(13, 66, 38, 0.82) 0%,
    rgba(21, 101, 52, 0.72) 100%
  );
  min-height: 250px;
  width: 100%;
}

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
  background: linear-gradient(135deg, #22c55e, #059669);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 1rem; color: white; flex-shrink: 0;
}

/* ── Contact CTA ── */
.contact-section { background: rgba(0,0,0,0.2); border-top: 1px solid rgba(255,255,255,0.08); }

/* ── Buttons ── */
.btn-primary {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }

.btn-secondary11 {
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255,255,255,0.4); color: #FBF6DA; font-weight: 600;
  border-radius: 0.75rem;
  transition: background 0.2s, border-color 0.2s;
  text-decoration: none;
  margin-top: 10px;
}

.btn-primary1 {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
}
.btn-primary1:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }

.btn-primary1 {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  margin-left: 460px;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }


.btn-secondary {
  display: inline-block;
  padding: 0.75rem 2rem;
  border: 2px solid rgba(255,255,255,0.4); color: #FBF6DA; font-weight: 600;
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


/* ── Cursor glow ── */
.cursor-glow {
  position: absolute;
  width: 150px; height: 150px;
  border-radius: 75%;
  background: radial-gradient(circle,
    rgba(74,222,128,0.15) 0%,
    rgba(34,197,94,0.08) 40%,
    transparent 70%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 2;
  mix-blend-mode: screen;
  will-change: left, top;
  left: 0; top: 0;
}

/* ── Cursor ring (trailing) ── */
.cursor-ring {
  position: absolute;
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 1.5px solid rgba(74,222,128,0.6);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 5;
  will-change: left, top;
  box-shadow:
    0 0 12px rgba(74,222,128,0.3),
    inset 0 0 8px rgba(74,222,128,0.1);
  left: 0; top: 0;
}

.cursor-ring::before {
  content: '';
  position: absolute;
  inset: 6px;
  border-radius: 50%;
  background: rgba(74,222,128,0.12);
}

/* ── Headline tilt ── */
.hero-headline-wrap {
  transition: transform 0.1s ease-out;
  will-change: transform;
}

@media (min-width: 640px) 
{ .whatsapp-label 
  { display: inline; 
  } 

  

}

@media (max-width: 480px) 
{
  .text-3xl1{
  color: #FBF6DA;
  margin-left: 0px;
  font-size: 23px;
}
.text-3xl2{
  color: #FBF6DA;
  margin-left: 30px;
  font-size: 23px;
}
.text-3xl3{
  color: #FBF6DA;
  margin-left: -10px;
  font-size: 23px;
}
.text-3xl4{
  color: #FBF6DA;
  margin-left: 100px;
  font-size: 23px;
}
.text-3xl5{
  color: #FBF6DA;
  margin-left: -20px;
  font-size: 23px;
}

.text-3xl6{
  color: #FBF6DA;
  margin-left: -10px;
  font-size: 23px;
}

.service-text{
  margin-left: 12px;
}

.eyebrow-pill1 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  
}

.eyebrow-pill2 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  
}
.eyebrow-pill3 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 103px;
  
}

.eyebrow-pill4 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 90px;
  
}

.eyebrow-pill5 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 98px;
  
}

.eyebrow-pill6 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 65px;
  
}


.eyebrow-pill7 {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(52,211,153,0.12);
  border: 1px solid rgba(52,211,153,0.3);
  border-radius: 9999px;
  padding: 0.35rem 1rem;
  margin-left: 0px;
  
}

.btn-primary1 {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: #FBF6DA; color: #0d4226; font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  margin-left: 45px;
}
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }

.review-dropdown {
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  max-width: calc(100vw - 280px); /* 280px accounts for the sidebar width */
  background: rgba(13, 66, 38, 0.97);
  border: 1px solid rgba(74, 222, 128, 0.35);
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  text-align: left;
  z-index: 9999;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  pointer-events: none;
  white-space: normal;
  word-break: break-word;
  margin-top: -180px;
}


}


/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .blob, .hero-glow-pulse, .hero-cursor, .scroll-hint, .marquee-inner { animation: none; }
  .hero-char { transition: none; opacity: 1; transform: none; }
  .hero-subtitle, .hero-cta { opacity: 1; transform: none; transition: none; }
  [data-observe], .scroll-child { opacity: 1; transform: none; transition: none; }
}



</style>
