/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 15:39:44
 * @LastEditTime: 2022-04-17 17:01:30
 * @Description:
 */

import { ref, reactive, onMounted, onUnmounted, toRefs } from 'vue'

export function useMouse() {
  const movement = reactive({ w: window.pageXOffset, h: window.pageYOffset })
  //e就是mousemove的事件对象
  function update(e) {
    console.log('event', e)
    movement.w = e.clientX
    movement.h = e.clientY
    const refData = toRefs(movement)
    console.log('refData', refData.h.value)
  }
  //组件加载的时候，会触发 onMounted 生命周期，我们执行监听 mousemove 事件，从而去更新鼠标位置的 x 和 y 的值；
  onMounted(() => {
    console.log('mousemove1', movement)
    //vue里面只监听到点击???
    document.addEventListener('mousemove', update)
  })
  //组件卸载的时候，会触发 onUnmounted 生命周期，解除 mousemove 事件。
  onUnmounted(() => {
    console.log('mousemove2', movement)
    document.removeEventListener('mousemove', update)
  })

  return { movement }
}
