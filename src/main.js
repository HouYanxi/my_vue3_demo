/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-17 11:23:31
 * @LastEditTime: 2022-04-23 13:32:46
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'


window.onerror = function(e){
  // debugger;
  console.log('stackoverflow',['https://stackoverflow.com/search?q=[js]+'+e])
}

createApp(App).use(store).use(router).mount('#app')
