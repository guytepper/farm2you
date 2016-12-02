import Vue from 'vue'
import VueRouter from 'vue-router'

// Import app components
import FarmList from './components/farm/FarmList'
import FarmPage from './components/farm/FarmPage'
import AddFarm from './components/forms/AddFarm'
import LoginPage from './components/auth/LoginPage'

// Register VueRouter with Vue
Vue.use(VueRouter)

// App routes
const routes = [
  { path: '/', component: FarmList },
  { path: '/add-farm/', component: AddFarm },
  { path: '/farm/:id', name: 'farm', component: FarmPage},
  { path: '/login/', component: LoginPage},
]

// Export the VueRouter instance
export default new VueRouter({
  mode: 'history',
  routes
})
