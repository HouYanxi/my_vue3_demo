<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-26 19:02:38
 * @LastEditTime: 2022-05-29 15:58:01
 * @Description: 
-->
<template>
  <h1>vue3+TS</h1>
</template>

<script setup lang="ts">
import { defineComponent, ref ,Ref} from 'vue'
const count = ref(1)

 interface Todo{ 
     title:string,
      done:boolean
 }
 let todos:Ref = ref([{title:'学习Vue',done:false}])
// count.value.split('')
</script>
