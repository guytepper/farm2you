import Vue from 'vue'
import store from './store'
import router from './routes'
import firebase from './config/firebase'

import App from './App'
import FarmList from './components/farm/FarmList'
import FarmPage from './components/farm/FarmPage'
import AddFarm from './components/forms/AddFarm'

const db = firebase.database()

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
  firebase: {
    farms: db.ref('farms'),
    pending_farms: db.ref('pending_farms'),
    locations: db.ref('locations')
  },
  created () {
    this.$store.dispatch('UPDATE_USER');
    this.$store.dispatch('UPDATE_LOCATION');
  }
})
