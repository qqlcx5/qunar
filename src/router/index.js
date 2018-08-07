import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from '@/pages/home/home'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'
export default new Router({
  routes: [{
      path: '/',
      component: home
    },
    {
      path: '/city',
      name: "city",
      component: city
    },
    {
      path: '/detail/:id',
      name: "detail",
      component: detail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
