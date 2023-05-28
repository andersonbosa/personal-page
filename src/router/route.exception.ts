// Special routes that have nothing to do with authentication
import { type RouteRecordRaw } from 'vue-router';

const exceptionRoutes: Array<RouteRecordRaw> = [
  {
    path: '/401',
    name: '401',
    meta: {
      title: 'Need to log in',
    },
    component: () => import('@/views/exception/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '非常抱歉,页面走丢了',
    },
    component: () => import('@/views/exception/404.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    meta: {},
    redirect: '/404',
  },
];

export default exceptionRoutes;
