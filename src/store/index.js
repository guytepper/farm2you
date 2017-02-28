import Vue from 'vue'
import Vuex from 'Vuex'
import VuexFire from 'vuexfire'
import firebase from '../config/firebase'

import { getPosition } from '../helpers/Location';

import User from './modules/user.js'

Vue.use(Vuex)
Vue.use(VuexFire)

export default new Vuex.Store({
  state: {
    farms: null,
    locations: null,
    current_location: null
  },
  mutations: {
    ...VuexFire.mutations,
    UPDATE_LOCATION (state, location) {
      state.current_location = location;
    }
  },
  actions: {
    // Updates the user's location position
    UPDATE_LOCATION ({ commit }) {
      getPosition.then(pos => {
        commit('UPDATE_LOCATION', pos);
      })
    }
  },
  getters: {
    farms: state => state.farms,
  },
  modules: {
    User
  },
});
