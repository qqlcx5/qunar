import Vue from 'vue'
import App from './App'

import router from './router'

import Axios from 'axios'
Vue.prototype.$axios = Axios
// 移动端点击事件300延迟
// import FastClick from 'fastclick'
// FastClick.attach(document.body);
//引入图标
import './assets/iconfont.css'

// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
new Vue({
  router,
  el: "#app",
  components: {
    App
  },
  template: '<App/>'
})
