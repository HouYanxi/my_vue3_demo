/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-24 17:24:58
 * @LastEditTime: 2022-04-24 18:25:56
 * @Description:
 */
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let thing = ref('')
    let todoList = ref([
      { name: '吃饭', done: false },
      { name: '睡觉', done: false },
      { name: '打豆豆', done: false },
    ])
    function addTings() {
      //这里的todoList.value不是数组,而是Proxy对象,数组只是Proxy下面包裹的值
      //因此在页面上没有直接显示出来
      console.log('tofolist', todoList.value)
      todoList.value.push({ name: thing.value })
      thing.value = ''
    }
    return () => 
      <div>
        {/* {}用于在JS里面渲染动态数据 */}
        <input type="text" vModel={thing.value} />
        <button onClick={addTings}>添加</button>
        <ul>
          {todoList.value.length ? (
            todoList.value.map((item) => {
              return <li>{item.name}</li>
            })
          ) : (
            <li>no data</li>
          )}
        </ul>
      </div>
  },
})
