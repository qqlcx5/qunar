import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default new Vuex.Store({
  state,
  actions,
  mutations,
  // getters: {
  //   doubleCity(state) {
  //     return state.city + " " + state.city
  //   }
  // }
  // state: {
  //   city: defaultCity
  // },

  // actions: {
  //   handleCity(ctx, city) {
  //     // console.log(ctx, city)
  //     ctx.commit("handleCity", city)
  //   }
  // },
  // mutations: {
  //   handleCity(state, city) {
  //     state.city = city
  //     try {
  //       localStorage.city = city
  //     } catch (e) {}

  //   }
  // }
})
