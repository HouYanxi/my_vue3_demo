/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-23 17:05:51
 * @LastEditTime: 2022-04-24 17:25:17
 * @Description: 
 */

import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  //手动创建虚拟DOM,实现JSX
  // setup(props, { slots }) {
  //   return () => h(
  //     'h' + props.level, // 标签名
  //     {style:'color:red'}, // prop 或 attribute
  //     slots.default() // 子节点
  //   )
  // }
  //jsx插件语法
  setup(props, { slots }) {
    const tag='h'+props.level
    return ()=><tag>{slots.default()}</tag>
  }
})