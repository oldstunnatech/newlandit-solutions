<template>
  <section class="detail-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink to="/solutions" class="back-link mb-8">← All solutions</NuxtLink>

      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="eyebrow-pill mb-4">Digital Strategy</p>
        <h1 class="text-xl sm:text-4xl font-extrabold mb-6">Digital Strategy & Enablement</h1>
        
      </div>

      <div class="detail-card mb-20">
        <p class="text-white/70 text-lg leading-relaxed">
          We guide both IT and non-IT projects with a structured approach. In addition, we strengthen your organization with digital strategies for brand development. From project management to branding and design.
        </p>
        <h2 class="text-xl font-bold mb-5">What we offer:</h2>
        <ul class="offer-list mb-10">
          <li v-for="item in offers" :key="item">{{ item }}</li>
        </ul>
        <a href="/contact" class="btn-primary">More about Enablement</a>
      </div>

      <!-- ── Timeline-style sub-sections ─────────────────────── -->
      <div class="timeline">
        <div
          v-for="(sub, i) in subSections"
          :key="sub.title"
          class="timeline-item"
        >
          <!-- Step indicator -->
          <div class="timeline-indicator">
            <div class="timeline-dot">
              <span class="timeline-num">{{ String(i + 1).padStart(2, '0') }}</span>
            </div>
            <div v-if="i < subSections.length - 1" class="timeline-line"></div>
          </div>

          <!-- Content + image side by side -->
          <div class="timeline-body" :class="{ 'timeline-body--flip': i % 2 !== 0 }">
            <!-- Text content -->
            <div class="timeline-content">
              <h2 class="timeline-title">{{ sub.title }}</h2>
              <p
                v-for="(para, pi) in sub.paragraphs"
                :key="pi"
                class="timeline-para"
              >{{ para }}</p>
              <ul class="offer-list mt-5">
                <li v-for="point in sub.points" :key="point">{{ point }}</li>
              </ul>
              <NuxtLink :to="sub.href" class="btn-secondary11 mt-4 inline-block"> {{ sub.link }}</NuxtLink>
            </div>

            <!-- Image -->
            <div class="timeline-image-wrap">
              <img :src="sub.image" :alt="sub.title" class="timeline-image" />
              <div class="timeline-image-badge">{{ sub.badge }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA band -->
    <div class="relative z-10 py-20 px-6 text-center border-t border-white/10">
      <div class="max-w-xl mx-auto">
        <p class="text-white/70 text-lg mb-6">Ready to strengthen your brand and digital presence?</p>
        <a href="/contact" class="btn-primary">Plan een kennismaking</a>
      </div>
    </div>

    <!-- WhatsApp FAB -->
    <a href="https://wa.me/31648364450" target="_blank" class="whatsapp-fab">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeo({
  title: 'Digital Strategy & Enablement in Amsterdam',
  description:
    'Digital strategy, project management, branding and UX/UI design from Newland IT-Solutions. We align technology with your ambitions for scalable growth.',
  path: '/solutions/digital-strategy',
})

const offers = [
  'Project management (also outside IT)',
  'Digital strategy, branding & visual design',
  'UI/UX Design',
]

const subSections = [
  {
    title: 'Project management',
    image: '/images/pexels-khwanchai-4175028.jpg',
    badge: 'Planning',
    paragraphs: [
      'Whether it concerns an IT implementation, digital transformation, or internal process improvement — good project management makes the difference. At Newland IT-Solutions, we guide companies in Amsterdam from start to delivery with structure, realistic planning, and clear communication.',
    ],
    points: [
      'Supervision of both technical and non-technical projects',
      'Structure, planning and progress monitoring',
      'Alignment with your internal processes and teams',
    ],
    link: 'Request project support',
    href: '/contact/'
  },
  {
    title: 'Branding & Logo Design',
    image: '/images/newland_cover_v1.png',
    badge: 'Identity',
    paragraphs: [
      'Our team of experts will strengthen your brand identity through unique logo and branding design.',
      'Our creative approach ensures a unique look that attracts and retains customers.',
    ],
    points: [
      'Unique logo and branding design',
      'Optimal user experience',
      'Effective strategies',
    ],
    link: 'Schedule a design intake',
    href: '/contact/',
  },
  {
    title: 'UX/UI Design',
    image: '/images/newland_cover_v4.png',
    badge: 'Design',
    paragraphs: [
      'We ensure an optimal user experience with our thoughtful UX/UI designs that attract and retain customers.',
      'We strive for perfection in every detail of our design, so that your brand stands out from the rest.',
    ],
    points: [
      'Consistent branding',
      'Customer attraction',
      'User-friendliness',
    ],
    link: 'Schedule a design intake',
    href: '/contact/',
  },
]
</script>

<style scoped>
.detail-page {
  background: linear-gradient(160deg, #0d4226 0%, #156534 40%, #1d8044 100%);
  min-height: 100vh;
}
.blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; animation: blobFloat 8s ease-in-out infinite; }
.blob-1 { width: 450px; height: 450px; background: radial-gradient(circle, #1d8044, #0d4226); top: -120px; right: -100px; }
.blob-2 { width: 350px; height: 350px; background: radial-gradient(circle, #22c55e, #156534); bottom: -100px; left: -80px; animation-delay: 3s; }
@keyframes blobFloat {
  0%, 100% { transform: translate(0,0) scale(1); }
  33%       { transform: translate(30px,-30px) scale(1.05); }
  66%       { transform: translate(-20px,20px) scale(0.95); }
}

.back-link { display: inline-block; color: #4ade80; font-weight: 600; font-size: 0.9rem; text-decoration: none; margin-bottom: 2rem; }
.back-link:hover { text-decoration: underline; }

.eyebrow-pill {
  display: inline-block; text-transform: uppercase; letter-spacing: 0.15em;
  font-size: 0.95rem; font-weight: 700; color: #4ade80;
  background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3);
  border-radius: 9999px; padding: 0.4rem 1.1rem;
}

.detail-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 1.5rem; padding: 2.5rem; }

.offer-list { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
.offer-list li { position: relative; padding-left: 1.5rem; color: #fbf6da; font-weight: 500; }
.offer-list li::before { content: ''; position: absolute; left: 0; top: 0.5em; width: 8px; height: 8px; border-radius: 50%; background: #4ade80; }

/* ── Timeline layout ───────────────────────────── */
.timeline { display: flex; flex-direction: column; gap: 0; }

.timeline-item { display: flex; gap: 2rem; align-items: stretch; }

.timeline-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 0.25rem;
}

.timeline-dot {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(34,197,94,0.15);
  border: 2px solid rgba(74,222,128,0.5);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.timeline-num {
  font-size: 0.85rem;
  font-weight: 800;
  color: #4ade80;
  letter-spacing: 0.05em;
}

.timeline-line {
  width: 2px;
  flex: 1;
  background: linear-gradient(to bottom, rgba(74,222,128,0.4), rgba(74,222,128,0.05));
  min-height: 3rem;
  margin: 0.5rem 0;
}

/* Content row */
.timeline-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  padding-bottom: 4rem;
  flex: 1;
}

.timeline-body--flip {
  direction: rtl;
}
.timeline-body--flip > * {
  direction: ltr;
}

.timeline-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #fbf6da;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.timeline-para {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

/* Image */
.timeline-image-wrap {
  position: relative;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.35);
}

.timeline-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.timeline-image-wrap:hover .timeline-image { transform: scale(1.04); }

.timeline-image-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(13,66,38,0.85);
  border: 1px solid rgba(74,222,128,0.4);
  color: #4ade80;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
}

.eyebrow-pill {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 1.0rem;
  font-weight: 700;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 9999px;
  padding: 0.4rem 1.1rem;
}

.text-lg{
  color: #fbf6da;

}
.text-xl{
 color: #fbf6da; 
 margin-top: 10px;
}

.btn-secondary11 {
  display: inline-block;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255,255,255,0.4); color: #25d366;; font-weight: 600;
  border-radius: 0.75rem;
  transition: background 0.2s, border-color 0.2s;
  text-decoration: none;
  margin-top: 10px;
}

/* ── Buttons ── */
.btn-primary { display: inline-block; padding: 0.75rem 2rem; background: #fbf6da; color: #0d4226; font-weight: 700; border-radius: 0.75rem; box-shadow: 0 4px 24px rgba(0,0,0,0.2); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; }
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }

/* ── WhatsApp ── */
.whatsapp-fab { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; background: #25d366; color: white; border-radius: 9999px; padding: 0.85rem 1.25rem; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 24px rgba(37,211,102,0.4); text-decoration: none; font-weight: 600; font-size: 0.875rem; transition: transform 0.2s, box-shadow 0.2s; }
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); }
.whatsapp-label { display: block; }

/* ── Responsive ── */
@media (max-width: 768px) {
  .timeline-item { flex-direction: column; }
  .timeline-indicator { flex-direction: row; gap: 1rem; }
  .timeline-line { width: 100%; height: 2px; min-height: unset; margin: 0; }
  .timeline-body { grid-template-columns: 1fr; direction: ltr; }
  .timeline-body--flip { direction: ltr; }
  .timeline-image { height: 220px; }
}

@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
