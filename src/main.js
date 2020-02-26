import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
Vue.prototype.$axios = axios;
// 移动端点击事件300延迟
import FastClick from "fastclick";
FastClick.attach(document.body);
// 兼容旧版
import "babel-polyfill";
//引入icon图标
import "./assets/iconfont.css";

// 轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper);
// mock数据
import "../api/mock/mockServer";
// 样式重置
import "./assets/css/border.css";
import "./assets/css/reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
