import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './helpers/Auth'

// Import app components
import FarmList from './components/farm/FarmList'
import FarmPage from './components/farm/FarmPage'
import AddFarm from './components/forms/AddFarm'
import LoginPage from './components/forms/Auth/LoginPage'
import PendingFarms from './components/admin/PendingFarms'

// Register VueRouter with Vue
Vue.use(VueRouter)

// App routes
const routes = [
  { path: '/', component: FarmList },
  { path: '/add-farm/', component: AddFarm },
  { path: '/farm/:id', name: 'farm', component: FarmPage },
  { path: '/login/', component: LoginPage },
  { path: '/admin/pending-farms', component: PendingFarms, meta: { onlyAdmin: true } },
]

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  // Check if the route requires the user to be an admin
  if (to.matched.some(record => record.meta.onlyAdmin)) {
    Auth.isAdmin().then(admin => {
      if (admin) next();
      else next('/login');
    });
  }
  else next();
})

// Export the VueRouter instance
export default router;
