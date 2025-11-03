<template>
<div class="bg-green-800">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
</template>

<script setup lang="ts">
import Header from "../app/components/Header.vue";
import Footer from "../app/components/Footer.vue";

</script>

<style scoped>

</style>