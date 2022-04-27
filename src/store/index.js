/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-21 14:41:03
 * @LastEditTime: 2022-04-21 20:50:56
 * @Description:
 */
import { createStore } from 'vuex'
// import {createStore} from './globalvuex'

const store = createStore({
  state() {
    return {
      count: 55,
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
  mutations: {
    add(state) {
      state.count++
    },
  },
  actions: {
    asyncadd({ commit }) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    },
  },
})

export default store
