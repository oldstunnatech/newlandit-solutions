<template>
  <section class="detail-page relative text-white overflow-hidden">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
      <NuxtLink to="/solutions/software-development" class="back-link mb-8">← Software Development</NuxtLink>

      <!-- Hero -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="eyebrow-pill mb-4">CMS Websites</p>
        <h1 class="text-4xl sm:text-4xl font-extrabold mb-6">CMS Websites for business growth</h1>
        <p class="text-white/70 text-lg leading-relaxed">
          At Newland IT-Solutions, we build intuitive, scalable, and user-friendly websites that enhance your online visibility. Whether you need a personal site, a business website, or an online store we offer solutions for companies in Amsterdam and the surrounding area, tailored to your goals, budget, and style.
        </p>
      </div>

      <!-- Product cards -->
      <div class="products-grid">
        <div v-for="product in products" :key="product.title" class="product-card">

          <!-- Image -->
          <div class="product-image-wrap">
            <img :src="product.image" :alt="product.title" class="product-image" />
            <div class="product-price-badge">{{ product.price }}</div>
          </div>

          <!-- Content -->
          <div class="product-body">
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-desc">{{ product.description }}</p>

            <ul class="feature-list">
              <li v-for="feature in product.features" :key="feature">
                <span class="feature-check">✓</span>
                {{ feature }}
              </li>
            </ul>

            <div class="product-actions">
              <a :href="product.detailLink" target="_blank" rel="noopener" class="btn-primary">
                View details
              </a>
              <a :href="product.buyLink" target="_blank" rel="noopener" class="btn-secondary">
                Order from {{ product.price }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="cta-band mt-20">
        <p class="text-white/80 text-lg mb-6">Not sure which platform suits your situation?</p>
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

const products = [
  {
    title: 'WiX Website',
    image: '/images/filters_quality(80).webp',
    price: '€575',
    description: 'A fast, modern website based on a user-friendly drag & drop editor. Ideal for freelancers, small businesses, or portfolios.',
    features: [
      'Pixel-perfect design',
      'More freedom in design',
      'Better performance & scalability',
    ],
    buyLink: 'https://www.newlandit-solutions.com/product/19311378/wix-website-vanaf',
    detailLink: 'https://www.newlandit-solutions.com/product/19311378/wix-website-vanaf',
  },
  {
    title: 'WordPress Website',
    image: '/images/wordpress-1678341859828-bfb1a2bd527a.avif',
    price: '€750',
    description: 'Powerful and flexible websites on the most widely used CMS in the world. Perfect for growing businesses.',
    features: [
      'Fully customizable',
      'Expandable with plugins',
      'SEO-friendly and scalable',
    ],
    buyLink: 'https://www.newlandit-solutions.com/product/19313231/wordpress-website-vanaf',
    detailLink: 'https://www.newlandit-solutions.com/product/19313231/wordpress-website-vanaf',
  },
  {
    title: 'E-commerce Shopify Website',
    image: '/images/unnamed.jpg',
    price: '€1,000',
    description: 'Professional e-commerce solution to sell products online quickly and clearly.',
    features: [
      'Optimized for conversion',
      'Payment and shipping modules included',
      'Fully manageable via dashboard',
    ],
    buyLink: 'https://www.newlandit-solutions.com/product/19312560/shopify-webshop-vanaf',
    detailLink: 'https://www.newlandit-solutions.com/product/19312560/shopify-webshop-vanaf',
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

/* ── Product grid ── */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  align-items: start;
}

.product-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(0,0,0,0.35);
}
.text-4xl{
    color: #fbf6da;

}
/* Image */
.product-image-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.product-card:hover .product-image { transform: scale(1.05); }

.product-price-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(13,66,38,0.9);
  border: 1px solid rgba(74,222,128,0.5);
  color: #4ade80;
  font-size: 1rem;
  font-weight: 800;
  padding: 0.4rem 0.9rem;
  border-radius: 9999px;
  backdrop-filter: blur(8px);
}

/* Body */
.product-body {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #fbf6da;
  margin-bottom: 0.75rem;
}

.product-desc {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

/* Features */
.feature-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  flex: 1;
}
.feature-list li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.85);
  font-weight: 500;
}
.feature-check {
  color: #4ade80;
  font-size: 0.9rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* Actions */
.product-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-primary {
  display: block;
  text-align: center;
  padding: 0.7rem 1.5rem;
  background: #fbf6da;
  color: #0d4226;
  font-weight: 700;
  border-radius: 0.75rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  font-size: 0.9rem;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.25); }

.btn-secondary {
  display: block;
  text-align: center;
  padding: 0.7rem 1.5rem;
  border: 1.5px solid rgba(74,222,128,0.4);
  color: #4ade80;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: background 0.2s, border-color 0.2s;
  text-decoration: none;
  font-size: 0.85rem;
}
.btn-secondary:hover { background: rgba(74,222,128,0.1); border-color: rgba(74,222,128,0.7); }

/* CTA band */
.cta-band {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 1.5rem;
}

/* WhatsApp */
.whatsapp-fab { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; background: #25d366; color: white; border-radius: 9999px; padding: 0.85rem 1.25rem; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 4px 24px rgba(37,211,102,0.4); text-decoration: none; font-weight: 600; font-size: 0.875rem; transition: transform 0.2s, box-shadow 0.2s; }
.whatsapp-fab:hover { transform: translateY(-3px) scale(1.05); }
.whatsapp-label { display: block; }

/* Responsive */
@media (max-width: 900px) { .products-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .products-grid { grid-template-columns: 1fr; } }
@media (prefers-reduced-motion: reduce) { .blob { animation: none; } }
</style>
