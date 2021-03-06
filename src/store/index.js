import Vue from 'vue';
import Vuex from 'Vuex';
import VuexFire from 'vuexfire';

import firebase from '../config/firebase';

import { getPosition } from '../helpers/Location';

import User from './modules/user.js';

Vue.use(Vuex);
Vue.use(VuexFire);

export default new Vuex.Store({
  state: {
    farms: null,
    locations: null,
    currentLocation: null,
    radius: 20
  },
  mutations: {
    ...VuexFire.mutations,
    UPDATE_LOCATION (state, location) {
      state.currentLocation = location;
    },
    UPDATE_RADIUS (state, radius) {
      state.radius = radius;
    }
  },
  actions: {
    // Prompts the user to provide his location
    GET_USER_LOCATION ({ commit }) {
      getPosition().then(pos => commit('UPDATE_LOCATION', pos));
    }
  },
  getters: {
    farms: state => state.farms,
  },
  modules: {
    User
  },
});
