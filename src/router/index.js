import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/member',
      name: 'member',
    },
    {
      path: '/lecture',
      name: 'lecture',
    },
    {
      path: '/project',
      name: 'project',
    },
  ],
})

export default router
