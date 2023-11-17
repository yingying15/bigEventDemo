import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/LayoutView.vue'),
      children: [
        {
          path: '/pageCenter',
          name: 'pageCenter',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/reqPromise',
          name: 'reqPromise',
          component: () => import('@/views/AboutView.vue')
        },
        {
          path: '/adaptHeight',
          name: 'adaptHeight',
          component: () => import('@/views/AdaptHeight.vue')
        },
        {
          path: '/formview',
          name: 'formview',
          component: () => import('@/views/FormView.vue')
        },
        {
          path: '/passwordView',
          name: 'passwordView',
          component: () => import('@/views/PasswordView.vue')
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
