import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home',
    },
  ],
})

export default router
