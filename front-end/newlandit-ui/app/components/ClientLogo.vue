<template>
  <div
    class="carousel-logo-card"
    :class="{ 'carousel-logo-card--hoverable': hasReview }"
    @mouseenter="hasReview && emit('enter')"
    @mouseleave="hasReview && emit('leave')"
    @click="hasReview && emit('toggle')"
  >
    <img :src="image" :alt="alt" class="logo-img" loading="lazy" />

    <Transition name="slide-review">
      <div v-if="hasReview && isActive" class="review-dropdown">
        <div class="review-arrow"></div>
        <p class="review-quote">"{{ quote }}"</p>
        <p class="review-author">— {{ author }}, {{ company }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface Props {
  image: string
  alt: string
  quote?: string
  author?: string
  company?: string
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  quote: undefined,
  author: undefined,
  company: undefined,
  isActive: false,
})

const emit = defineEmits<{
  enter: []
  leave: []
  toggle: []
}>()

const hasReview = computed(() => !!props.quote)
</script>

<style scoped>
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

.review-dropdown {
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  max-width: calc(100vw - 280px);
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

@media (max-width: 480px) {
  .review-dropdown {
    width: 250px;
    margin-top: -180px;
  }
}
</style>
