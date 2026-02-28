import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: '首頁' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: '關於' },
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('@/views/MemberView.vue'),
      meta: { title: '社團成員' },
    },
    {
      path: '/lecture',
      name: 'lecture',
      component: () => import('@/views/LectureView.vue'),
      meta: { title: '社課' },
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('@/views/ProjectView.vue'),
      meta: { title: '活動' },
    },
    {
      path: '/qrcode',
      redirect: '/',
    },
  ],
})

export default router
