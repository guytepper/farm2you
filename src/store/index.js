import Vue from 'vue'
import Vuex from 'Vuex'
import VuexFire from 'vuexfire'
import Firebase from 'firebase'

Vue.use(Vuex)
Vue.use(VuexFire)

export default new Vuex.Store({
  state: {
    farms: null,
  },
  mutations: VuexFire.mutations,
  getters: {
    farms: state => state.farms,
  }
});
