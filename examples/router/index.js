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
  path: '/dialog',
  name: 'Dialog',
  component: () => import('@/pages/Dialog')
}, {
  path: '/drawer',
  name: 'Drawer',
  component: () => import('@/pages/Drawer')
}, {
  path: '/form',
  name: 'Form',
  component: () => import('@/pages/Form')
}, {
  path: '/input',
  name: 'Input',
  component: () => import('@/pages/Input')
}, {
  path: '/notice',
  name: 'Notice',
  component: () => import('@/pages/Notice')
}, {
  path: '/select',
  name: 'Select',
  component: () => import('@/pages/Select')
}, {
  path: '/tab',
  name: 'Tab',
  component: () => import('@/pages/Tab')
}, {
  path: '/table',
  name: 'Table',
  component: () => import('@/pages/Table')
}, {
  path: '/checkbox',
  name: 'Checkbox',
  component: () => import('@/pages/Checkbox')
}, {
  path: '/radio',
  name: 'Radio',
  component: () => import('@/pages/Radio')
}, {
  path: '/slide',
  name: 'Slide',
  component: () => import('@/pages/Slide')
}, {
  path: '/swiper',
  name: 'Swiper',
  component: () => import('@/pages/Swiper')
}, {
  path: '/tooltip',
  name: 'Tooltip',
  component: () => import('@/pages/Tooltip')
}, {
  path: '/tree',
  name: 'Tree',
  component: () => import('@/pages/Tree')
}, {
  path: '/page',
  name: 'Page',
  component: () => import('@/pages/Page')
}, {
  path: '/dropdown',
  name: 'Dropdown',
  component: () => import('@/pages/Dropdown')
}, {
  path: '/datetime',
  name: 'Datetime',
  component: () => import('@/pages/Datetime')
}, {
  path: '/lazy',
  name: 'Lazy',
  component: () => import('@/pages/Lazy')
}, {
  path: '/drag',
  name: 'Drag',
  component: () => import('@/pages/Drag')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
