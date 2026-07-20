<template>
  <section class="detail-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink to="/solutions/it-consulting" class="back-link mb-8">← IT Consulting</NuxtLink>

      <!-- Hero -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="eyebrow-pill mb-4">IT Support Services</p>
        <h1 class="text-4xl sm:text-4xl font-extrabold mb-6">Smart IT support, wherever and whenever you need it</h1>
        <p class="text-white/70 text-lg leading-relaxed">
          At Newland IT-Solutions we keep your business running in Amsterdam and North Holland. Whether you are self-employed or managing a growing team we offer reliable support remotely and on site. From quick help desk questions to proactive system management: you choose the package that suits your organization.
        </p>
      </div>

      <!-- Pricing cards -->
      <div class="plans-grid">
        <div
          v-for="(plan, i) in plans"
          :key="plan.title"
          class="plan-card"
          :class="{ 'plan-card--featured': plan.featured }"
        >
          <!-- Featured badge -->
          <div v-if="plan.featured" class="featured-badge">Most popular</div>

          <!-- Image -->
          <div class="plan-image-wrap">
            <img :src="plan.image" :alt="plan.title" class="plan-image" />
            <div class="plan-image-overlay">
              <span class="plan-tier">{{ plan.tier }}</span>
            </div>
          </div>

          <!-- Body -->
          <div class="plan-body">
            <div class="plan-header">
              <h2 class="plan-title">{{ plan.title }}</h2>
              <div class="plan-price">
                <span class="price-amount">{{ plan.price }}</span>
                <span class="price-suffix">{{ plan.priceSuffix }}</span>
              </div>
            </div>

            <p class="plan-target">{{ plan.target }}</p>
            <p class="plan-desc">{{ plan.description }}</p>

            <div class="plan-includes">
              <p class="includes-label"> Includes:</p>
              <ul class="feature-list">
                <li v-for="feature in plan.features" :key="feature">
                  <span class="feature-check">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </div>

            <p v-if="plan.note" class="plan-note">{{ plan.note }}</p>

            <div class="plan-actions">
              <a :href="plan.link" target="_blank" rel="noopener" class="btn-primary">
                {{ plan.featured ? 'Get started' : 'View details' }}
              </a>
              <a :href="plan.link" target="_blank" rel="noopener" class="btn-secondary">
                Order from {{ plan.price }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-band mt-20">
        <h2 class="text-2xl font-bold mb-3">Not sure which package fits?</h2>
        <p class="text-white/70 mb-6">Contact us for a no obligation consultation we'll find the right plan together.</p>
        <a href="/contact" class="btn-primary">Plan a free consultation</a>
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

const plans = [
  {
    title: 'Basic Support Remote',
    tier: 'Basic',
    image: '/images/Different-Types-of-IT-Support-Services.jpg',
    price: '€45',
    priceSuffix: '/month per workplace',
    featured: false,
    target: 'Aimed at sole proprietorships and small organizations that mainly need reactive remote help, without fixed obligations.',
    description: '€80 per hour (on demand) or €45/month per workplace',
    features: [
      'Remote support during office hours',
      'Basic monitoring (optional via remote-agent)',
      '10% discount on extra work (such as small projects or upgrades)',
    ],
    note: null,
    link: 'https://www.newlandit-solutions.com/product/19328983/basic-support-remote-voor-zzp-ers-en-kleine-bedrijven',
  },
  {
    title: 'Pro Support Remote',
    tier: 'Pro',
    image: '/images/employees-looking-financial-statistics-computer.jpg',
    price: '€55',
    priceSuffix: '/month per workplace',
    featured: true,
    target: 'For growing companies in need of continuity, monitoring and optimization.',
    description: 'From €55 p/m per workplace for SMEs with 5–25 workplaces.',
    features: [
      'Unlimited remote support during office hours',
      'Periodic health checks',
      'Patch management',
      'Backup and storage advice',
    ],
    note: null,
    link: 'https://www.newlandit-solutions.com/product/19329122/pro-support-remote-voor-het-mkb-5-25-werkplekken',
  },
  {
    title: 'Premium Support – DevOps & Cloud SLA',
    tier: 'Premium',
    image: '/images/itsupport-1551434678-e076c223a692.avif',
    price: '€750',
    priceSuffix: '/month (custom SLA)',
    featured: false,
    target: 'For agencies, development teams and companies with complex IT environments, CI/CD processes or hybrid cloud structures.',
    description: 'From €750 p/m based on custom SLA depending on project scope and deployment.',
    features: [
      'Hybrid support (remote & on-site)',
      'SLA-based approach with fast response times',
      'Cloud and infrastructure management (Azure, AWS, CI/CD)',
    ],
    note: 'This package is fully tailored to your specific situation. Request a free quote for a tailor-made proposal.',
    link: 'https://www.newlandit-solutions.com/product/19329360/premium-support-devops-cloud-sla-vanaf',
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
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(30px,-30px) scale(1.05); }
  66%      { transform: translate(-20px,20px) scale(0.95); }
}

.back-link { display: inline-block; color: #4ade80; font-weight: 600; font-size: 0.9rem; text-decoration: none; margin-bottom: 2rem; }
.back-link:hover { text-decoration: underline; }

.eyebrow-pill {
  display: inline-block; text-transform: uppercase; letter-spacing: 0.15em;
  font-size: 1.0rem; font-weight: 700; color: #4ade80;
  background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3);
  border-radius: 9999px; padding: 0.4rem 1.1rem;
}
.text-4xl{
 color: #fbf6da; 
}

.text-2xl{
   color: #fbf6da; 

}


/* ── Plans grid ── */
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.plan-card {
  position: relative;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.plan-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.35); }

.plan-card--featured {
  border-color: rgba(74,222,128,0.5);
  box-shadow: 0 0 0 1px rgba(74,222,128,0.2), 0 8px 32px rgba(0,0,0,0.3);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  background: #4ade80;
  color: #0d4226;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
}

/* Image */
.plan-image-wrap { position: relative; height: 200px; overflow: hidden; }
.plan-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
.plan-card:hover .plan-image { transform: scale(1.05); }
.plan-image-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(13,66,38,0.9) 100%);
  display: flex; align-items: flex-end; padding: 1rem;
}
.plan-tier {
  font-size: 1.5rem; font-weight: 900;
  color: rgba(74,222,128,0.5);
  letter-spacing: -0.03em;
}

/* Body */
.plan-body { padding: 1.75rem; display: flex; flex-direction: column; flex: 1; gap: 0.75rem; }

.plan-header { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.5rem; }

.plan-title { font-size: 1.1rem; font-weight: 800; color: #fbf6da; line-height: 1.3; }

.plan-price { display: flex; align-items: baseline; gap: 0.35rem; }
.price-amount { font-size: 2rem; font-weight: 900; color: #4ade80; }
.price-suffix { font-size: 0.75rem; color: rgba(255,255,255,0.55); }

.plan-target { font-size: 0.8rem; color: rgba(255,255,255,0.65); line-height: 1.5; font-style: italic; }
.plan-desc { font-size: 0.85rem; color: rgba(255,255,255,0.75); line-height: 1.6; }

.plan-includes { display: flex; flex-direction: column; gap: 0.5rem; }
.includes-label { font-size: 0.8rem; font-weight: 700; color: #4ade80; }

.feature-list { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
.feature-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.83rem; color: rgba(255,255,255,0.85); }
.feature-check { color: #4ade80; font-weight: 700; flex-shrink: 0; margin-top: 1px; }

.plan-note {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.5;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 0.75rem;
  padding: 0.75rem;
}

.plan-actions { display: flex; flex-direction: column; gap: 0.75rem; margin-top: auto; padding-top: 1rem; }

.btn-primary { display: block; text-align: center; padding: 0.7rem 1.5rem; background: #fbf6da; color: #0d4226; font-weight: 700; border-radius: 0.75rem; box-shadow: 0 4px 16px rgba(0,0,0,0.2); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; font-size: 0.9rem; }
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }

.btn-secondary { display: block; text-align: center; padding: 0.7rem 1.5rem; border: 1.5px solid rgba(74,222,128,0.4); color: #4ade80; font-weight: 600; border-radius: 0.75rem; transition: background 0.2s, border-color 0.2s; text-decoration: none; font-size: 0.85rem; }
.btn-secondary:hover { background: rgba(74,222,128,0.1); border-color: rgba(74,222,128,0.7); }

/* CTA band */
.cta-band { text-align: center; padding: 3rem 2rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 1.5rem; }

/* WhatsApp */
.whatsapp-fab { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; background: #25d366; color: white; border-radius: 9999px; padding: 0.85rem 1.25rem; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 24px rgba(37,211,102,0.4); text-decoration: none; font-weight: 600; font-size: 0.875rem; transition: transform 0.2s, box-shadow 0.2s; }
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); }
.whatsapp-label { display: block; }

/* Responsive */
@media (max-width: 900px) { .plans-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .plans-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
