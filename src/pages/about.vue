<!--
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:49:08
 * @LastEditTime: 2022-04-27 09:26:27
 * @Description: TodoList案例
-->
<template>
  <div>
    <div>
      <div class="things">{{ thing }} <span class="dustbin">🗑</span></div>
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
        <transition-group tag="ul" name="flip-list">
          <li v-for="(item, index) in todoList" :key="item.name">
            <input type="checkbox" v-model="item.done" />
            <!-- 已完成事项勾选后样式 -->
            <span :class="{ doneStyle: item.done }">{{ item.name }}</span>
            <span @click="removeTodo($event, index)">❌</span>
          </li>
        </transition-group>
      </ul>
      <div>
        全选：<input type="checkbox" v-model="allDone" />{{ unchoosed }}/{{
          allValue
        }}
      </div>
    </div>
    <!-- 错误提示动画 -->
    <transition name="modal">
      <div class="error_info" v-if="showModal">
        <div class="error_text">请输入点东西!</div>
      </div>
    </transition>
    <div class="animate-wrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="animate" v-show="animate.show">📋</div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, reactive, Ref } from 'vue'
import { useStorage } from '../utils/getsessionStorage.js'

let {
  thing,
  todoList,
  unchoosed,
  allValue,
  allDone,
  addThings,
  removeDone,
  showModal,
  removeTodo,
} = useTodoList()

// 删除当前事件，飞到纸篓动画
let animate = reactive({ show: false, el: null })

function beforeEnter(el) {
  let dom = animate.el
  let rect = dom.getBoundingClientRect()
  let x = window.innerWidth - rect.left - 60
  let y = rect.top - 100
  console.log('beforeEnter', el, dom, rect, x, y)
  el.style.transform = `translate(-${x}px, ${y}px)`
}
function enter(el, done) {
  // document.body.offsetHeight
  console.log('enter', document.body.offsetHeight)
  el.style.transform = `translate(0,0)`
  el.addEventListener('transitionend', done)
}
function afterEnter(el) {
  animate.show = false
  el.style.display = 'none'
  console.log('afterEnter', el)
}

function useTodoList() {
  interface TodoItem {
    name: string
    done: boolean
  }
  let thing = ref('')
  let todo: Ref<TodoItem[]> = ref([
    { name: '吃饭', done: false },
    { name: '睡觉', done: false },
    { name: '打豆豆', done: false },
  ])
  let todoList: Ref<TodoItem[]> = useStorage('todos', todo)
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
    set(val:boolean) {
      todoList.value.forEach((item) => {
        item.done = val
      })
    },
  })
  //1.添加代办事项(push()可以改变原数组，并且被监听到)
  let showModal = ref(false)
  function addThings() {
    console.log('things.value', thing.value)
    if (!thing.value) {
      showModal.value = true
      console.log('things.showModal', showModal.value)
      setTimeout(() => {
        showModal.value = false
      }, 2000)
      return
    }
    todoList.value.push({ name: thing.value, done: false })
    thing.value = ''
  }
  //5.清除已完成的事项(filter会返回一个新数组，不会更改元素组，所以这里要重新赋值)
  function removeDone() {
    //保留，过滤出未完成的事项
    todoList.value = todoList.value.filter((item) => !item.done)
  }
  //6.点击X，移除当前事件
  function removeTodo(e, i) {
    // 触发其他三个函数的关键
    //1.将删除的点击事件获取的元素赋给animate对象
    //2.show属性的true/false触发
    animate.el = e.target
    animate.show = true
    console.log('clicked', e, i, animate)
    todoList.value.splice(i, 1)
  }
  return {
    thing,
    todoList,
    unchoosed,
    allValue,
    allDone,
    addThings,
    removeDone,
    showModal,
    removeTodo,
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
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
/* .flip-list-move {
  transition: transform 0.8s ease;
} */
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.dustbin {
  float: right;
  font-size: 2rem;
}
.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 100px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>
