import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e8df5cf6 = () => interopDefault(import('../pages/audio.vue' /* webpackChunkName: "pages/audio" */))
const _0fc97b0f = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _c2b6466e = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _2d5da6b9 = () => interopDefault(import('../pages/videos.vue' /* webpackChunkName: "pages/videos" */))
const _50370081 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/audio",
    component: _e8df5cf6,
    name: "audio"
  }, {
    path: "/contact",
    component: _0fc97b0f,
    name: "contact"
  }, {
    path: "/inspire",
    component: _c2b6466e,
    name: "inspire"
  }, {
    path: "/videos",
    component: _2d5da6b9,
    name: "videos"
  }, {
    path: "/",
    component: _50370081,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
