import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/button',
  name: 'Button',
  component: () => import('@/pages/Button')
}, {
  path: '/drawer',
  name: 'Drawer',
  component: () => import('@/pages/Drawer')
}, {
  path: '/form',
  name: 'Form',
  component: () => import('@/pages/Form')
}, {
  path: '/tab',
  name: 'Tab',
  component: () => import('@/pages/Tab')
}, {
  path: '/table',
  name: 'Table',
  component: () => import('@/pages/Table')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
