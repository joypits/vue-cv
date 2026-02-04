import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/vue-cv/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/resume',
      name: 'Resume',
      component: () => import('@/views/Resume.vue'),
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/views/Portfolio.vue'),
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/Blog.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
})

export default router
