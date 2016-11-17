import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
import FarmList from './components/FarmList';
import FarmPage from './components/FarmPage';

const routes = [
  { path: '/', component: FarmList },
  { path: '/farm', component: FarmPage },
]

const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
