/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-19 09:25:09
 * @LastEditTime: 2022-04-26 20:47:10
 * @Description: 
 */
import { ref,watchEffect } from 'vue';

export function useStorage(name, value=[]){
  let data = ref(JSON.parse(sessionStorage.getItem(name))|| value)
  watchEffect(()=>{
    console.log('useStorage2',data,data._rawValue);
      sessionStorage.setItem(name,JSON.stringify(data.value))
  })
  return data
}
