<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:49:08
 * @LastEditTime: 2022-04-19 18:00:08
 * @Description: TodoList案例
-->
<template>
  <div>
    <div class="things">{{ thing }}</div>
    <div>
      <input
        type="text"
        class="input_box"
        v-model="thing"
        @keyup.enter="addThings"
      />
      <!-- 6.当存在被勾选(已完成)的事项时才展示清除按钮,目前只有未完成的computed值,可以发现,存在已完成值时,未完成始长度终小于总长度 -->
      <button @click="removeDone()" v-if="unchoosed < allValue">清除</button>
    </div>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <input type="checkbox" v-model="item.done" />
        <!-- 已完成事项勾选后样式 -->
        <span :class="{ doneStyle: item.done }">{{ item.name }}</span>
      </li>
    </ul>
    <div>
      全选：<input type="checkbox" v-model="allDone" />{{ unchoosed }}/{{
        allValue
      }}
    </div>
  </div>
  <!-- 错误提示动画 -->
  <div class="error_info">
    <div class="error_text">请输入点东西!</div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useStorage } from '../utils/getsessionStorage.js'

let { thing, todoList, unchoosed, allValue, allDone, addThings, removeDone } =
  useTodoList()

function useTodoList() {
  let thing = ref('')
  let todo = ref([
    { name: '吃饭', done: false },
    { name: '睡觉', done: false },
    { name: '打豆豆', done: false },
  ])
  let todoList = useStorage('todos', todo)
  //3.未完成的事项统计比例
  let unchoosed = computed(() => {
    return todoList.value.filter((item) => !item.done).length
  })
  let allValue = computed(() => {
    return todoList.value.length
  })
  //4.全选与反选
  let allDone = computed({
    //get对应的是，获取列表里面未完成的事项,如果全部完成则unchoose为0,此时全选也是自动被选中
    get() {
      return unchoosed.value == 0
    },
    //set对应的是获取allDone本身的值val,使列表中的每一项值与全选一致
    set(val) {
      todoList.value.forEach((item) => {
        item.done = val
      })
    },
  })
  //1.添加代办事项(push()可以改变原数组，并且被监听到)
  function addThings() {
    todoList.value.push({ name: thing.value, done: false })
    thing.value = ''
  }
  //5.清除已完成的事项(filter会返回一个新数组，不会更改元素组，所以这里要重新赋值)
  function removeDone() {
    //保留，过滤出未完成的事项
    todoList.value = todoList.value.filter((item) => !item.done)
  }
  return {
    thing,
    todoList,
    unchoosed,
    allValue,
    allDone,
    addThings,
    removeDone,
  }
}
</script>

<style scoped>
.things {
  height: 1.2rem;
}
.input_box {
  height: 1.6rem;
}
.doneStyle {
  color: #aaa;
  text-decoration: line-through;
}
.error_info {
  position: fixed;
  top: 20px;
  left: 50%;
  width: 200px;
  margin-left: -100px;
  /* margin: 0rem auto; */
}
.error_text {
  padding: 20px;
  color: white;
  background: #d88986;
}
</style>
