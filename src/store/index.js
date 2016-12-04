import Vue from 'vue'
import Vuex from 'Vuex'
import VuexFire from 'vuexfire'
import firebase from '../config/firebase'

Vue.use(Vuex)
Vue.use(VuexFire)

export default new Vuex.Store({
  state: {
    farms: null,
    pending_farms: null,
    locations: null,
    user: null
  },
  mutations: {
    updateUser (state, user) {
      state.user = user;
    },
    ...VuexFire.mutations
  },
  getters: {
    farms: state => state.farms,
  }
});
