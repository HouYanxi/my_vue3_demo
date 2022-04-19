<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:48:48
 * @LastEditTime: 2022-04-17 17:26:43
 * @Description: 
-->

<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
    <div>鼠标坐标:[x:{{ movement.w }},y:{{ movement.h }}]</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMouse } from '../utils/mouse'
export default {
  setup() {
    let { movement } = useMouse()
    let count = ref(1)
    let color = ref('pink')
    function add() {
      console.log('count', Math.random())
      count.value++;
      color.value=Math.random()>0.5?'blue':'pink';
    }
    return {
      movement,
      count,
      color,
      add
    }
  },
}
</script>

<style>
h1 {
  color:v-bind(color);
}
</style>
