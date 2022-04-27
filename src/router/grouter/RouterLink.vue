<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-22 10:34:14
 * @LastEditTime: 2022-04-22 11:48:10
 * @Description: 
-->
<template>
  <a :href="'#' + props.to">
    <slot />
  </a>
</template>
<script setup>
let props = defineProps({
  to: { type: String, required: true },
})
console.log('props',props)
</script>
