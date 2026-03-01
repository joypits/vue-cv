<template>
  <nav class="nav-menu">
    <ul>
      <li v-for="item in navItems" :key="item.path">
        <router-link
          :to="item.path"
          class="pt-link"
          active-class="active"
        >
          <span class="nav-menu-icon">
            <i :class="item.icon"></i>
          </span>
          {{ item.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const navItems = [
  { label: 'Home', path: '/', icon: 'lnr lnr-home' },
  { label: 'About Me', path: '/about', icon: 'lnr lnr-user' },
  { label: 'Resume', path: '/resume', icon: 'lnr lnr-license' },
  { label: 'Portfolio', path: '/portfolio', icon: 'lnr lnr-briefcase' },
  { label: 'Contact', path: '/contact', icon: 'lnr lnr-envelope' },
]
</script>
