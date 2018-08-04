import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/pages/home/home'
import city from '@/pages/city/city'


export default new Router({
  base: __dirname,
  routes: [
    {
    path: '/',

    component: home
  },
    {
    path: '/city',
    name:"city",
    component: city
  }
]
})
