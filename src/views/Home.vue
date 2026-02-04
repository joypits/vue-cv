<script setup>
const homeImage = '/img/background/home-bg2.png'
const homeTitle = [
  { name: 'Joy Faith', highlight: 'Prieto' },
]
const positionTitle = [
  { name: 'Software Developer' },
  { name: 'SOC Analyst' },
  { name: 'Freelance Photographer' }
]
</script>
<template>
  <section id="home" class="banner-section pt-page" :style="{ backgroundImage: `url(${homeImage})` }">
      <div class="banner-content">
        <!--Banner Text-->
          <h1 class="mb-20">{{ homeTitle[0].name }} <span>{{ homeTitle[0].highlight }}</span></h1>
          <!--Animated Text-->
          <p class="cd-headline clip is-full-width">
            <span>I am a&nbsp;</span>
            <span class="cd-words-wrapper">
                <b class="is-visible">{{ positionTitle[0].name }}</b>
                <b>{{ positionTitle[1].name }}</b>
                <b>{{ positionTitle[2].name }}</b>
            </span>
          </p>
      </div>
  </section>
</template>
