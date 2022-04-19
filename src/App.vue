<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:23:31
 * @LastEditTime: 2022-04-19 16:58:47
 * @Description: 
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
  <div>
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link> |
    <router-link to="/responsive">响应式</router-link> |
    <router-link to="/changeFavicon">改变网页图标</router-link> |
    <router-link to="/getRate">评级小组件</router-link> |
    <router-link to="/animation">动画</router-link> 
  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
