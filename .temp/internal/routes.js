/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/Jarvis/Desktop/NineSwordsMonster.github.io/.vuepress/theme/lib/layouts/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-6767f14b",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("home", "v-6767f14b").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-f4f4af7a",
    path: "/posts/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("posts", "v-f4f4af7a").then(next)
    },
  },
  {
    path: "/posts/index.html",
    redirect: "/posts/"
  },
  {
    name: "v-b2754d56",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Home", "v-b2754d56").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-1f814451",
    path: "/posts/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Posts", "v-1f814451").then(next)
    },
  },
  {
    path: "/posts/index.html",
    redirect: "/posts/"
  },
  {
    name: "v-03721585",
    path: "/posts/tags/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Tags", "v-03721585").then(next)
    },
  },
  {
    path: "/posts/tags/index.html",
    redirect: "/posts/tags/"
  },
  {
    name: "v-5eb9e6bc",
    path: "/posts/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Categories", "v-5eb9e6bc").then(next)
    },
  },
  {
    path: "/posts/categories/index.html",
    redirect: "/posts/categories/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]