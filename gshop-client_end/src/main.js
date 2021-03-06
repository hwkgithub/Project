/*
 * @Description: 入口JS
 * @Autor: HWK
 * @Date: 2020-04-23 21:15:00
 * @LastEditors: HWK
 * @LastEditTime: 2020-05-03 17:46:07
 */
import Vue from 'vue'
import {
  Button
} from 'mint-ui'
//图片懒加载
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可
import loading from './common/imgs/loading.gif'
import './fiters' // 加载过滤器

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用上vue-router
  store, // 使用上vuex
})
