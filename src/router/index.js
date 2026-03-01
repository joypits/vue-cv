import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/vue-cv/'), // <--- use hash mode
  routes: [
    { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
    { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
    { path: '/resume', name: 'Resume', component: () => import('@/views/Resume.vue') },
    { path: '/portfolio', name: 'Portfolio', component: () => import('@/views/Portfolio.vue') },
    { path: '/contact', name: 'Contact', component: () => import('@/views/Contact.vue') },
  ],
})
export default router
