import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import Axios from 'axios'
Vue.prototype.$axios = Axios
// 移动端点击事件300延迟
import 'babel-polyfill'
import FastClick from 'fastclick'
FastClick.attach(document.body);
//引入图标
import './assets/iconfont.css'

// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// mock数据
import './mock/mockServer'


Vue.config.productionTip = false
new Vue({
  router,
  store,
  el: "#app",
  components: {
    App
  },
  template: '<App/>'
})
