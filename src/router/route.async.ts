// Business routes that require authority
import { type RouteRecordRaw } from 'vue-router'

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {},
    component: () => import('@/views/about/AboutView.vue'),
  },
  {
    path: '/useless',
    name: 'useless',
    meta: {},
    component: () => import('@/views/home/UselessView.vue'),
  },

]

export default asyncRoutes
