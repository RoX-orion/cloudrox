import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/index/index'),
      }
    ]
  },
  {
    path: '/content',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index/:text :src',
        name: 'Content',
        component: () => import('@/views/content/index')
      }
    ]
  },
  // {
  //   path: '/test',
  //   name: 'Name',
  //   component: () => import('@/views/test/index')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
