<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 21:15:49
 * @LastEditTime: 2022-04-18 20:59:15
 * @Description: 
-->
<template>
  <div>123</div>
</template>

<script setup>
import {reactive,computed,watchEffect} from 'vue'

let obj = reactive({
    count:1
})
let double = computed(()=>obj.count*2)

obj.count = 2

watchEffect(()=>{
    console.log('数据被修改了',obj.count,double.value)
})
</script>

<style lang="scss" scoped></style>
