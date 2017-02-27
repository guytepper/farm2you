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
    current_location: null
  },
  mutations: {
    ...VuexFire.mutations,
    UPDATE_LOCATION (state, location) {
      state.location = location;
    }
  },
  actions: {
    // Updates the user's location position
    UPDATE_LOCATION ({ commit }) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      // Prompts the user to give it's current location & commits the value
      navigator.geolocation.getCurrentPosition(pos => {
        commit('UPDATE_LOCATION', pos);
      }, null, options);
    }
  },
  getters: {
    farms: state => state.farms,
  },
  modules: {
    User
  },
});
