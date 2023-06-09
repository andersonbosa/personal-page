// Business routes that require authority
import { type RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: 'About',
      icon: '',
    },
    component: () => import('@/views/about/AboutView.vue'),
  },

]

export default asyncRoutes
