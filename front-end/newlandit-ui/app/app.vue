<template>
  <div>
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const items = [
  "/images/agapejoycare-high-sd2l7h.png.webp",
  "/images/bzvj-high-1vnsrg.png.webp",
  "/images/chatgpt-image-may-12-2025-11_00_28-pm-high-high.webp",

]
</script>

<style>
/* 2. Standard way to import animate.css if installed via npm */
@import "animate.css";

/* Optional: Ensure the carousel container has some height */
img {
  display: block;
}
</style>