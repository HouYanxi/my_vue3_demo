/*
 * @Author: Miss.Hyx
 * @Date: 2022-04-19 21:02:06
 * @LastEditTime: 2022-04-24 17:23:31
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()]
})
