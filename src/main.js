import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'Vuex'
import store from './store'
import { firebaseInit } from './config/firebase'

import App from './App'
import FarmList from './components/FarmList'
import FarmPage from './components/FarmPage'

Vue.use(VueRouter)

const firebase = firebaseInit()
const db = firebase.database()

const routes = [
  { path: '/', component: FarmList },
  { path: '/farm/:id', name: 'farm', component: FarmPage},
]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
  firebase: {
    farms: db.ref('farms')
  }
})
