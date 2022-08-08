/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:46:37
 * @LastEditTime: 2022-05-21 22:06:08
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'
// import { createRouter, createWebHashHistory } from './grouter/index'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import Responsive from '../pages/Responsive.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/responsive',
    name: 'Responsive',
    // component: ()=>import('../pages/Responsive.vue')//懒加载
    component: Responsive
  },
  {
    path: '/changeFavicon',
    name: 'ChangeFavicon',
    component: ()=>import('../pages/changeFavicon.vue')//懒加载
  },
  {
    path: '/getRate',
    name: 'GetRate',
    component: ()=>import('../pages/getRate.vue')//懒加载
  },
  {
    path: '/animation',
    name: 'Animation',
    component: ()=>import('../pages/frontAnimation.vue')//懒加载
  },
  {
    path: '/vuexTest',
    name: 'VuexTest',
    component: ()=>import('../pages/VuexTest.vue')//懒加载
  },
  {
    path: '/vue3TS',
    name: 'vue3TS',
    component: ()=>import('../pages/TsSyntax.vue')//懒加载
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
