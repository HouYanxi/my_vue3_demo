/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:46:37
 * @LastEditTime: 2022-04-19 16:57:55
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'

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
    component: ()=>import('../pages/Responsive.vue')//懒加载
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
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
