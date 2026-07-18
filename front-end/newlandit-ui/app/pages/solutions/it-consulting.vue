<template>
  <section class="detail-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink to="/solutions" class="back-link mb-8">← All solutions</NuxtLink>

      <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="eyebrow-pill mb-4">IT Consulting</p>
        <h1 class="text-xl sm:text-4xl font-extrabold mb-6">IT Consulting & Support</h1>

      </div>

      <div class="detail-card mb-16">
        <p class="text-lg leading-relaxed mb-8">
          We help you make smart IT choices and ensure that systems, processes, and support function optimally today and in the future.
        </p>
        <h2 class="text-xl font-bold mb-5">What we offer:</h2>
        <ul class="offer-list mb-10">
          <li v-for="item in offers" :key="item">{{ item }}</li>
        </ul>
        <a href="/contact" class="btn-primary">More about IT Consultancy</a>
      </div>

      <div class="sub-sections">
        <div v-for="(sub, i) in subSections" :key="sub.title" class="sub-section">
          <div class="banner-wrap">
            <img :src="sub.image" :alt="sub.title" class="banner-image" />
            <div class="banner-overlay">
              <span class="banner-number">0{{ i + 1 }}</span>
            </div>
          </div>
          <div class="sub-card">
            <h2 class="sub-title">{{ sub.title }}</h2>
            <p v-for="(para, pi) in sub.paragraphs" :key="pi" class="sub-para">{{ para }}</p>
            <ul class="offer-list mt-6">
              <li v-for="point in sub.points" :key="point">{{ point }}</li>
            </ul>
            <NuxtLink :to="sub.href" class="btn-secondary11 mt-4 inline-block"> {{ sub.link }}</NuxtLink>

          </div>
        </div>
      </div>
    </div>

    <a href="https://wa.me/31648364450" target="_blank" class="whatsapp-fab" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span class="whatsapp-label">Chat with us</span>
    </a>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

const offers = [
  'IT consultancy & system selection',
  'Digital transformation & integration',
  'IT support (helpdesk, remote & on-site)',
  
]

const subSections = [
  {
    title: 'IT consultancy & system selection',
    image: '/images/pexels-ai25studioai-5466280.jpg',
    paragraphs: [
      'With our IT consultancy and system selection, we offer expert advice and guidance in choosing the right IT solutions that fit your organization and ambitions specifically for companies in Amsterdam and the Metropolitan Area.',
      'Choose our IT consultancy and system selection to choose the right IT solutions that fit your business needs and future plans.',
    ],
    points: ['Expert advice', 'Custom solutions', 'Future-oriented'],
    link: 'Schedule a consultation',

    href: '/contact/',
  },
  {
    title: 'Digital transformation & integration',
    image: '/images/pexels-ai25studioai-5466243.jpg',
    paragraphs: [
      'At Newland IT-Solutions, we support organizations in realizing digital transformation and integration projects. We ensure you are ready for the future from strategy to implementation.',
      'Trust our expertise to strengthen your organization with smart, scalable, and future-proof IT solutions. Whether it involves cloud solutions, on-premise systems, or hybrid integrations we help you improve your competitive position.',
    ],
    points: [
      'Strategy determination and implementation',
      'Innovative cloud and on-premise solutions',
      'Efficiency improvement in processes and systems',
    ],
    link: 'Request a strategy session',

    href: '/contact/',

  },
  {
    title: 'IT support (helpdesk, remote & on-site)',
    image: '/images/pexels-ai25studioai-5583974.jpg',
    paragraphs: [
      'Our IT support services provide remote or on-site support always fast and reliable, exactly when you need it.',
      'With Newland IT-Solutions, you are assured of professional support for a wide range of IT challenges from daily help desk questions to critical system failures.',
    ],
    points: ['Fast response times', 'Proactive management', 'Support on demand'],
    link: 'Request support',

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
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -30px) scale(1.05); }
  66%       { transform: translate(-20px, 20px) scale(0.95); }
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

/* ── Card-style sub-sections (3 columns) ── */
.sub-sections { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; align-items: start; }
.sub-section {
  display: flex; flex-direction: column;
  border-radius: 1.25rem; overflow: hidden;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.sub-section:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
.banner-wrap { position: relative; width: 100%; height: 200px; overflow: hidden; }
.banner-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.sub-section:hover .banner-image { transform: scale(1.05); }
.banner-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(13,66,38,0.85) 100%);
  display: flex; align-items: flex-end; padding: 1rem;
}
.banner-number { font-size: 2.5rem; font-weight: 900; color: rgba(74,222,128,0.4); line-height: 1; letter-spacing: -0.05em; }
.sub-card { padding: 1.5rem; flex: 1; }
.sub-title { font-size: 1.1rem; font-weight: 700; color: #fbf6da; margin-bottom: 0.75rem; line-height: 1.3; }
.sub-para { font-size: 0.85rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 0.75rem; }

.btn-primary { display: inline-block; padding: 0.75rem 2rem; background: #fbf6da; color: #0d4226; font-weight: 700; border-radius: 0.75rem; box-shadow: 0 4px 24px rgba(0,0,0,0.2); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; }
.btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 8px 32px rgba(0,0,0,0.25); }

.whatsapp-fab { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; background: #25d366; color: white; border-radius: 9999px; padding: 0.85rem 1.25rem; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 24px rgba(37,211,102,0.4); text-decoration: none; font-weight: 600; font-size: 0.875rem; transition: transform 0.2s, box-shadow 0.2s; }
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); }
.whatsapp-label { display: block; }

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

@media (max-width: 768px) { .sub-sections { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
