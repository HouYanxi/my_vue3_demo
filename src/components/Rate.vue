<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-19 13:57:45
 * @LastEditTime: 2022-04-26 19:30:54
 * @Description: 
-->
<template>
<slot></slot>
  <div :style="fontStyle">
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
          @click="onRate(num)"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue'

let props = defineProps({
  // value: Number,
  modelValue: Number,
  theme: { type: String, default: 'orange' },
})
// let rateSystem = computed(() =>
//   '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value)
// )
let width = ref(props.modelValue)

function mouseOver(i) {
  width.value = i
}

function mouseOut() {
  width.value = props.modelValue
}

const fontwidth = computed(() => `width:${width.value}em;`)

const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}
const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})
//props参数emit写法
// let emits = defineEmits('update-rate')
// function onRate(num) {
//   console.log('emits',emits)
//   emits('update-rate', num)
// }
//v-model参数emit写法
let emits=defineEmits(['update:modelValue']);
function onRate(num) {
  console.log('emits',emits)
  emits('update:modelValue',num);
}


</script>
<style scoped>
.rate {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  font-family: '宋体';
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
