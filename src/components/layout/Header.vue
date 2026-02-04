<template>
  <header>
    <div class="header-content">

      <!-- Mobile Header -->
      <div class="header-mobile">
        <a class="header-toggle" @click="toggleMenu">
          <i class="fas fa-bars"></i>
        </a>
        <h2>{{ name }}</h2>
      </div>

      <!-- Main Header -->
      <div
        class="header-main"
        data-simplebar
        :class="{ open: isMenuOpen }"
      >
        <div class="image-container">
          <h2 class="header-name">{{ name }}</h2>
          <img :src="profileImage" alt="profile-pic" />
        </div>

        <Navigation />
        <Footer />
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from './Navigation.vue'
import Footer from './Footer.vue'

const name = ref('Joy Faith Prieto')
import profileImage from '@/assets/img/profile-img.jpg'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
