import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/views/MemberView.vue'),
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: () => import('@/views/LectureView.vue'),
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/ProjectView.vue'),
    },
  ],
})

export default router
