<script setup>
import { ref, computed } from 'vue'

import img1 from '@/assets/img/portfolio/iconstagecraftbuilders.png'
import img2 from '@/assets/img/portfolio/img-2.jpg'
import img3 from '@/assets/img/portfolio/img-3.jpg'
import img4 from '@/assets/img/portfolio/img-4.jpg'
import img5 from '@/assets/img/portfolio/img-5.jpg'

const portfolioItems = [
  { category: 'WebApp', url: 'https://joypits.github.io/iconstagecraftbuilders/', image: img1, title: 'Icon Stagecraft Builders', description: 'Sound and Light Rental Services' },
  // { category: 'Cybersecurity', url: 'https://joypits.github.io/vue-cv', image: img2, title: 'Notepad Design', description: 'Cybersecurity' },
  // { category: 'Photography', url: 'https://joypits.github.io/vue-cv',image: img3, title: 'Creative Cup', description: 'Photography' },
  // { category: 'Cybersecurity', url: 'https://joypits.github.io/vue-cv',image: img4, title: 'Business Card', description: 'Cybersecurity' },
  // { category: 'WebApp', url: 'https://joypits.github.io/vue-cv', image: img5, title: 'Back Pack', description: 'WebApp' }
]

const filters = ['All', 'WebApp', 'Cybersecurity', 'Photography','VMware','Certifications']

// **Reactive selected filter**
const selectedFilter = ref('All')

// **Computed filtered items**
const filteredItems = computed(() => {
  if (selectedFilter.value === 'All') return portfolioItems
  return portfolioItems.filter(item => item.category === selectedFilter.value)
})

// **Filter click handler**
function selectFilter(filter) {
  selectedFilter.value = filter
}
</script>

<template>
  <section class="portfolio-section pt-page">
    <div class="section-container">

      <!-- Page Heading -->
      <div class="page-heading">
        <span class="icon"><i class="lnr lnr-briefcase"></i></span>
        <h2>Portfolio</h2>
        <p>Some of my recent works.</p>
      </div>

      <div class="row">
        <!-- Portfolio Filter -->
        <div class="col-md-12 portfolio-filter text-center">
          <ul>
            <li
              v-for="(filter, i) in filters"
              :key="i"
              :class="{ active: selectedFilter === filter }"
              @click="selectFilter(filter)"
            >
              {{ filter }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Portfolio Items -->
      <div class="row portfolio-items mb-50">
        <div
          class="item col-lg-4 col-sm-6"
          v-for="(item, i) in filteredItems"
          :key="i"
        >
          <a class="image-link" :href="item.url" target="_blank" rel="noopener">
            <figure>
              <img :src="item.image" :alt="item.title" />
              <figcaption>
                <h4>{{ item.title }}</h4>
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
