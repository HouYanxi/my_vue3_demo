<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-19 11:48:27
 * @LastEditTime: 2022-04-19 16:07:26
 * @Description: 
-->
<template>
  <Rate v-model="score" theme="blue" @update-rate="update"></Rate>
</template>

<script setup>
import {ref} from 'vue';
import Rate from '../components/Rate.vue';

let score=ref(3.5);
function update(num){
  score.value=num;
}
</script>
