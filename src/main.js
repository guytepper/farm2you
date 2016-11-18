import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'Vuex'
import store from './store'

import App from './App'
import FarmList from './components/FarmList'
import FarmPage from './components/FarmPage'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
  { path: '/', component: FarmList },
  { path: '/farm/:id', component: FarmPage },
]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})
