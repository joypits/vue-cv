<template>
  <div class="nav-footer">
    <ul class="social">
      <li v-for="social in socials" :key="social.icon">
        <a :href="social.link" target="_blank">
          <i :class="social.icon"></i>
        </a>
      </li>
    </ul>

    <div class="copy">
      <p>
        {{ year }} &copy; JFP Portfolio.<br />
        All Rights Reserved.
      </p>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear()

const socials = [
  { icon: 'fab fa-facebook-square', link: 'https://www.facebook.com/zee.anderson.p/' },
  { icon: 'fab fa-github-square', link: 'https://github.com/joypits' },
  { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/joy-prieto-4b4b25210/' }
]
</script>
