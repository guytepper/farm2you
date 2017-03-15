import Vue from 'vue'
import VueRouter from 'vue-router'

import Meta from 'vue-meta'
import VueAnalytics from 'vue-ua'

import store from './store'
import Auth from './helpers/Auth'

import Homepage from './components/Homepage'
import FarmList from './components/farm/FarmList'
import FarmPage from './components/farm/FarmPage'
import AddFarm from './components/forms/AddFarm'
import AddFarmUser from './components/forms/AddFarmUser'
import LoginPage from './components/forms/Auth/LoginPage'

// Register VueRouter with Vue
Vue.use(VueRouter)
Vue.use(Meta)

// App routes
const routes = [
  { path: '/', name: 'homepage', component: FarmList },
  { path: '/farm/:id', name: 'farm', component: FarmPage, props: true },
  { path: '/login/', component: LoginPage },
  { path: '/add-farm/', name: 'add-farm', component: AddFarmUser },
  { path: '/admin/add-farm/', component: AddFarm, meta: { onlyAdmin: true} },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // Check if the route requires the user to be an admin
  if (to.matched.some(record => record.meta.onlyAdmin)) {
    if (store.state.User.isAdmin) {
      next();
    }
    else next('/');
  }
  else next();
})

// Analytics
Vue.use(VueAnalytics, {
  appName: 'Farm2You',
  appVersion: '1.0',
  trackingId: 'UA-18040964-7',
})

// Export the VueRouter instance
export default router;
