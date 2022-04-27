<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:48:48
 * @LastEditTime: 2022-04-24 18:12:16
 * @Description: 
-->

<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    <div>鼠标坐标:[x:{{ movement.w }},y:{{ movement.h }}]</div>
    <Heading :level="2">This is a dynamic heading</Heading>
       <!-- JSX的TodoList -->
    <TodoList></TodoList>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMouse } from '../utils/mouse'
import Heading from '../components/Heading.jsx'
import TodoList from '../components/TodoList.jsx'

//该jsx自定义组件在export setup()无效

let { movement } = useMouse()
let count = ref(1)
let color = ref('pink')
function add() {
  console.log('count', Math.random())
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'pink'
}
</script>

<style>
h1 {
  color: v-bind(color);
}
</style>
