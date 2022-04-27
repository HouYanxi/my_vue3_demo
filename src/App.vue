<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:23:31
 * @LastEditTime: 2022-04-26 19:05:55
 * @Description: 
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <div>
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">TodoList</router-link> |
    <router-link to="/responsive">响应式</router-link> |
    <router-link to="/changeFavicon">改变网页图标</router-link> |
    <router-link to="/getRate">评级小组件</router-link> |
    <router-link to="/animation">动画</router-link> |
    <router-link to="/VuexTest">vuex测试</router-link> |
    <router-link to="/vue3TS">vue3+TS语法</router-link> 
  </div>
  <!-- 在手写vue-router中RouterView是一个Router内置的组件，会对外暴露当前路由 -->
<!-- <router-view v-slot="{ Component }">
  <transition  name="slide-fade">
    <component :is="Component" />
  </transition>
</router-view> -->
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
.slide-fade{
  position: fixed;left:0;right: 0;
  width: 100%;
  background-color: white;
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;top: 0;right: 0;
  position: absolute;
  transform:translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
  opacity:1;
}
.slide-fade-enter-active {
  background-color: white;
  transition: all 0.6s ease;
}
.slide-fade-leave-active {
  transition: all 0.7s ease;
  background-color: white;
  transform:translateX(500px) translateY(500px) rotate(150deg) scale(1) ;
  z-index: 100;
}

</style>
