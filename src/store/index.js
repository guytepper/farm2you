import Vue from 'vue'
import Vuex from 'Vuex'
import VuexFire from 'vuexfire'
import firebase from '../config/firebase'

import User from './modules/user.js'

Vue.use(Vuex)
Vue.use(VuexFire)

export default new Vuex.Store({
  state: {
    farms: null,
    pending_farms: null,
    locations: null,
  },
  mutations: {
    ...VuexFire.mutations
  },
  getters: {
    farms: state => state.farms,
  },
  modules: {
    User
  },
});
