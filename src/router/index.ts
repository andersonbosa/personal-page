import asyncRoutes from '@/router/route.async'
import commonRoutes from '@/router/route.common'
import exceptionRoutes from '@/router/route.exception'
import NProgress from 'nprogress'
import { createRouter, createWebHashHistory, type Router, type RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  // Business routes without authentication, e.g., login
  ...commonRoutes,
  // Business routes with authentication
  ...asyncRoutes,
  // Exception pages must be placed at the end of the route matching rules
  ...exceptionRoutes,
]

const router: Router = createRouter({
  // Use history routing mode and base prefix with the new vue-router4
  history: createWebHashHistory(import.meta.env.VITE_BASE),
  routes,
})

/**
 * @description: Global before-route guard that triggers before entering a route.
 * Navigation remains in a pending state until all guards are resolved.
 * @param {RouteLocationNormalized} to - The target route to navigate to.
 * @param {RouteLocationNormalizedLoaded} from - The current route being navigated away from.
 * @return {*}
 */
router.beforeEach((to, from) => {
  console.log('Global before-route guard: to, from\n', to, from)
  // Set page title
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
})

router.afterEach((to, from) => {
  console.log('Global after-route guard: to, from\n', to, from)
  NProgress.done()
})

export default router
