import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/pages/home'


export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: home
  }]
})
