<template>
  <div class="flex flex-col min-h-screen bg-green-800">
    <Header />
    <div class="flex flex-1">
      <SideNav class="w-64 shrink-0" />
      <div class="flex flex-col flex-1 min-w-0">
        <main class="flex-1">
          <slot />
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
