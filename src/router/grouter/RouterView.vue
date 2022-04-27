<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-22 10:16:01
 * @LastEditTime: 2022-04-23 14:36:29
 * @Description: 
-->
<template>
  <!-- component组件is属性渲染符合条件的对象，作为该组件的内容 -->
  <component :is="comp"></component>
</template>
<script setup>
import { computed } from 'vue';
import {useRouter} from './index'

let router=useRouter()

const comp=computed(()=>{
  //route是当前路由对象，router是路由器，包含所有路由对象
  const route=router.routes.find((route)=>route.path==router.current.value)
  console.log('route',route);
  return route?route.component:null;
})
</script>
