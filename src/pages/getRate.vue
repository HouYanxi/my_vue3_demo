<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-19 11:48:27
 * @LastEditTime: 2022-04-22 13:54:49
 * @Description: 
-->
<template>
  <div>
    <Rate v-model="score" theme="blue" @update-rate="update">课程评分</Rate>
    <Rate v-model="score" theme="blue" @update-rate="update"
      ><img width="14" src="/favicon.ico"
    /></Rate>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate.vue'

let score = ref(3.5)
function update(num) {
  score.value = num
}
</script>
