/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-22 09:36:49
 * @LastEditTime: 2022-04-22 11:40:02
 * @Description: 
 */
import {ref,inject,provide} from 'vue'
import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

const ROUTER_KEY='__router__'

//createRouter对外暴露路由创建实例
function createRouter(options){
  return new Router(options);
}
//useRouter对外暴露获取路由实例
function useRouter(){
  return inject(ROUTER_KEY)
}
//使用hash模式的路由方法，返回当前路由监听事件和路由地址
function createWebHashHistory(){
  function bindEvents(fn){
    window.addEventListener('hashchange',fn)
  }
  return {
    bindEvents,
    url:window.location.hash.slice(1) || '/'
  }
}

//路由类
class Router{
  //构造器函数：注册路由参数
  constructor(options){
    //1.历史路由模式（回调函数）
    this.history=options.history
    //2.所有路由对象
    this.routes=options.routes
    //3.当前路由地址
    this.current=ref(this.history.url)
    //调用路由模式下的监听事件
    this.history.bindEvents(()=>{
      this.current.value=window.location.hash.slice(1)
    })
  }
  //路由变量挂载到全局app下,在全局可以访问到
  install(app){
    app.provide(ROUTER_KEY,this)
    //app下注册组件
    app.component('router-link',RouterLink)
    app.component('router-view',RouterView)
  }
}
//向外暴露方法
export {createRouter,createWebHashHistory,useRouter}