<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-19 10:52:13
 * @LastEditTime: 2022-04-19 11:43:42
 * @Description: 
-->
<template>
  <button @click="loading">改变网页图标</button>
  <h1 @click="toggle">切换全屏</h1>
</template>

 <script setup>
 import useFavicon from '../utils/favicon'
 import {useFullscreen} from '@vueuse/core';

 let {favicon}  = useFavicon();
 const { isFullscreen, enter, exit, toggle } = useFullscreen()
 
 function loading(){
   favicon.value = '/icon2.jpg'
 }
</script>


