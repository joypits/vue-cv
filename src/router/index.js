import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Resume from '@/views/Resume.vue'
import Contact from '@/views/Contact.vue'
import Portfolio from '@/views/Portfolio.vue'
import Blog from '@/views/Blog.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/resume', component: Resume },
  { path: '/portfolio', component: Portfolio },
  { path: '/blog', component: Blog },
  { path: '/contact', component: Contact },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
