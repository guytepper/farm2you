import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
