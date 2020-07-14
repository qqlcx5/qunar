import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import home from "@/pages/home/home";
import city from "@/pages/city/city";
import detail from "@/pages/detail/detail";
import Cdn from "@/pages/cdn/index";
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: home
    },
    {
      path: "/city",
      name: "city",
      component: city
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: detail
    },
    {
      path: "/cdn",
      name: "cdn",
      component: Cdn
    }
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});
