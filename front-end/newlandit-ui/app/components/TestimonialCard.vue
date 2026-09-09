<template>
  <div class="testimonial-card scroll-child" :style="`transition-delay: ${delay}s`">
    <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
    <p class="quote">"{{ quote }}"</p>
    <div class="author-row">
      <div class="avatar" aria-hidden="true">{{ name[0] }}</div>
      <div>
        <div class="author-name">{{ name }}</div>
        <div class="author-company">{{ company }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  quote: string
  name: string
  company: string
  delay?: number
}

withDefaults(defineProps<Props>(), { delay: 0 })
</script>

<style scoped>
.testimonial-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  transition: transform 0.2s, background 0.2s, opacity 0.5s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.1);
}

.stars {
  color: #fbbf24;
  letter-spacing: 2px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.quote {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  line-height: 1.75;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.author-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #22c55e, #059669);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
}

.author-name {
  font-weight: 600;
  font-size: 0.875rem;
  color: white;
}

.author-company {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
}

/* scroll reveal — parent adds .in-view */
.scroll-child {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.scroll-child.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
