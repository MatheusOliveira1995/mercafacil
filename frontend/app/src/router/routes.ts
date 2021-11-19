import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CharactersPage.vue') }]
  },
  {
    path: '/characters',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CharactersPage.vue') }]
  },
  {
    path: '/episodes',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EpisodesPage.vue') }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
