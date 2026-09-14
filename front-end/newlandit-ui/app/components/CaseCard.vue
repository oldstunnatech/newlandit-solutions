<template>
  <NuxtLink :to="to" class="case-card">
    <div class="case-image-wrap">
      <img v-if="image" :src="image" :alt="title" class="case-image" />
      <div v-else class="case-image-placeholder" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
      </div>
    </div>
    <div class="case-body">
      <p class="case-client">{{ client }}</p>
      <h3 class="case-title">{{ title }}</h3>
      <p class="case-summary">{{ summary }}</p>
      <div v-if="tags.length" class="case-tags">
        <span v-for="tag in tags" :key="tag" class="case-tag">{{ tag }}</span>
      </div>
      <span class="case-link">{{ readMore }} →</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  to: string
  title: string
  client: string
  summary: string
  tags?: string[]
  image?: string
  readMore?: string
}

withDefaults(defineProps<Props>(), {
  tags: () => [],
  readMore: 'Read more',
})
</script>

<style scoped>
.case-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.25rem;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s;
}

.case-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(74, 222, 128, 0.3);
}

.case-image-wrap {
  width: 100%;
  height: 200px;
  overflow: hidden;
  flex-shrink: 0;
}

.case-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.case-card:hover .case-image {
  transform: scale(1.04);
}

.case-image-placeholder {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.2);
}

.case-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.case-client {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #4ade80;
  margin-bottom: 0.5rem;
}

.case-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #fbf6da;
  margin-bottom: 0.75rem;
  line-height: 1.35;
}

.case-summary {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.65;
  margin-bottom: 1rem;
  flex: 1;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1rem;
}

.case-tag {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.25);
  color: #4ade80;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.case-link {
  font-size: 0.875rem;
  font-weight: 600;
  color: #4ade80;
  margin-top: auto;
}
</style>
