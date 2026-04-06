<template>
  <section
      class="relative h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-900 to-emerald-600 text-white">

    <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mt-250 leading-tight">
  Newland IT Solutions
</h1>
    
      
    <p class="mt-4 text-base sm:text-lg max-w-2xl text-center text-white/90">Your bridge to tomorrows technology</p>
    <button class="mt-10 px-6 py-3 bg-white text-green-900 rounded-lg shadow-lg hover:scale-105 transition"><a href="">Plan een kennismaking</a>
    </button>

    <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mt-16 text-center">Smart IT solutions for growing businesses</h2>
    <p class="mt-4 text-base sm:text-lg max-w-2xl text-center text-white/90">We help freelancers, small businesses and organizations with reliable IT support, custom software and professional websites, without complicated technical language.</p>

    <h3 class="text-xl sm:text-2xl font-semibold mt-16 text-center">Our customers</h3>
    <p class="mt-4 text-base sm:text-lg max-w-2xl text-center text-white/90">From local organizations to national institutions — these customers rely on our expertise in software development, IT strategy and project management. What binds them? The need for a partner who thinks along, switches quickly and provides solutions that really work.</p>
    
<div class="p-8">
    <UCarousel
      :items="items"
        :ui="{ item: 'basis-1/6 px-3' }"
      class="w-full max-w-7xl mx-auto overflow-hidden"
      dots
      autoplay
      
    >
      <template #default="{ item }">
        <div class="p-6 bg-gray-100 rounded-2xl text-center mt-40">
          <img :src="item.image" class="w-100p h-30 object-cover rounded-xl mb-4" />
          <h2 class="text-xl font-bold">{{ item.title }}</h2>
        </div>

        <div v-for="item in items" :key="item.image">
    <!-- <NuxtImg
      :src="item.image"
      width="300"
      height="200"
      format="webp"
      quality="70"
    /> -->
  </div>



      </template>
    </UCarousel>
  </div>
       



  <div class="w-full max-w-7xl mx-auto px-6 mt-6">

  <div class="flex flex-col md:flex-row gap-10">

    <!-- LEFT SIDE -->
    <div class="flex-1">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center mt-n10 md:text-left">
        Why Newland IT Solutions
      </h2>

      <div class="flex flex-wrap gap-4 justify-center md:justify-start">

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72 me-30">
          <h3 class="text-xl font-bold mb-2">Clear communication & transparency</h3>
          <p>Clear agreements, clear language, no surprises.</p>
        </div>

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72 ms-30">
          <h3 class="text-xl font-bold mb-2">Customization</h3>
          <p>Solutions tailored to your processes and goals</p>
        </div>

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72">
          <h3 class="text-xl font-bold mb-2">Fast support</h3>
          <p>Quickly helped remotely or on location.</p>
        </div>

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72 ms-30">
          <h3 class="text-xl font-bold mb-2">Experienced team</h3>
          <p>From implementation to strategy — one partner.</p>
        </div>

      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex-1">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
        Our services
      </h2>

      <p class="mb-6 text-white/90">
        We offer a wide range of specialized IT services, tailored to your unique situation.
        Our approach is personal, targeted and always focused on sustainable digital growth.
      </p>

      <div class="flex flex-wrap gap-6 justify-center md:justify-start">

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72 ms-40">
          <h3 class="text-xl font-bold mb-2">Software & Automation</h3>
          <p>Smart tools that accelerate and simplify processes.</p>
        </div>

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72">
          <h3 class="text-xl font-bold mb-2">IT Support & Management</h3>
          <p>Reliable and secure IT support.</p>
        </div>

        <div class="bg-white text-black rounded-2xl shadow-lg p-6 w-full sm:w-72 ms-40">
          <h3 class="text-xl font-bold mb-2">Consultancy & Strategy</h3>
          <p>Strategic digital growth advice.</p>
        </div>

      </div>
    </div>

  </div>

  
</div>



<button class="mt-0 px-6 py-3 bg-white text-green-900 rounded-lg shadow-lg hover:scale-105 transition"><a href="">View all our services</a>
</button>



  




  </section>

  


  

</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const items = [
  {
    title: "",
    image: "/images/agapejoycare-high-sd2l7h.png.webp",

  },
  {
    title: "",
    image: "/images/bzvj-high-1vnsrg.png.webp"
  },
  {
    title: "",
    image: "/images/chatgpt-image-may-12-2025-11_00_28-pm-high-high.webp",
  },

  {
    title: "",
    image: "/images/color-2x-high.png.webp",
  },

  {
    title: "",
    image: "/images/double-asap-greytones-high-xdljy4.png.webp",
  },

  {
    title: "",
    image: "/images/flexxes-logo-v5_flexxes-logo-cmyk-black-standard-transparant_1600x-high.webp",
  },

  {
    title: "",
    image: "/images/gemeente-amsterdam-4-logo-png-transparent-high.png.webp",
  },

]



import '~/assets/css/main.css'

</script>


<style scoped> 

</style>

