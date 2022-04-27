<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-21 14:47:23
 * @LastEditTime: 2022-04-21 20:49:31
 * @Description: 
-->
<template>
  <div>
    <div>{{ count }}*2={{ double }}</div>
    <button @click="add">click add</button>
    <button @click="asyncAdd">async add</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import {useStore} from '../store/globalvuex'

let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)
function add() {
  store.commit('add')
}
function asyncAdd(){
  store.dispatch('asyncadd')
}
</script>
