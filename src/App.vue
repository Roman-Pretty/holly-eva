<script setup>
import Hero from './components/Hero.vue'
import Header from './components/Header.vue'
import About from './components/About.vue'
import Music from './components/Music.vue'
</script>

<template>
  <main class="grainy">

    <Header />
    <Hero />
    <About />
    <Music />
    <footer class="bg-base-300 text-center h-[4rem] flex items-center justify-end md:px-48 px-6 font-semibold">
      <!-- <p>© 2025 Holly Eva</p> -->
    </footer>
  </main>
</template>