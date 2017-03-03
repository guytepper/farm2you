import Vue from 'vue';
import Vuex from 'Vuex';
import VuexFire from 'vuexfire';
import VueResource from 'vue-resource';

import firebase from '../config/firebase';

import { getPosition } from '../helpers/Location';

import User from './modules/user.js';

Vue.use(Vuex);
Vue.use(VuexFire);
Vue.use(VueResource);

export default new Vuex.Store({
  state: {
    farms: null,
    locations: null,
    currentLocation: null
  },
  mutations: {
    ...VuexFire.mutations,
    UPDATE_LOCATION (state, location) {
      state.currentLocation = location;
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
