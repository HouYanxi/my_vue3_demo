/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-21 19:38:02
 * @LastEditTime: 2022-04-21 20:18:00
 * @Description: 
 */
import { inject, reactive } from 'vue'
const STORE_KEY = '__store__'
function useStore() {
  return inject(STORE_KEY)
}
function createStore(options) {
  return new Store(options)
}
class Store {
  constructor(options) {
    this.$options = options
    this._state = reactive({
      data: options.state()//data:options.state().count
    })
    this._mutations = options.mutations//_mutation:options.mutations.add()
  }
  get state() {
    //调用_state
    return this._state.data
  }
  //定义comimit函数，当外部触发就会执行_mutation的更改操作
  commit = (type, payload) => {
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }
  // main.js入口处app.use(store)的时候，会执行这个函数
  install(app) {
    app.provide(STORE_KEY, this)
  }
}
export { createStore, useStore }
