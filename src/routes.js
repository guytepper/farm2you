import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from './helpers/Auth'

// Import app components
import Homepage from './components/Homepage'
import FarmList from './components/farm/FarmList'
import FarmPage from './components/farm/FarmPage'
import AddFarm from './components/forms/AddFarm'
import LoginPage from './components/forms/Auth/LoginPage'
import PendingFarms from './components/admin/PendingFarms'

// Register VueRouter with Vue
Vue.use(VueRouter)

const baseTitle = ' - ישר מהשדה'

// App routes
const routes = [
  { path: '/', component: Homepage },
  { path: '/add-farm/', component: AddFarm, meta: { title: 'הוספת משק' + baseTitle } },
  { path: '/farm/:id', name: 'farm', component: FarmPage },
  { path: '/login/', component: LoginPage, meta: { title: 'התחברות' + baseTitle } },
  { path: '/admin/pending-farms', component: PendingFarms, 
    meta: { onlyAdmin: true, title: 'אישור משקים' + baseTitle } },
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
  
  // Set the page title
  if (to.meta.title) document.title = to.meta.title; 
  else document.title = 'ישר מהשדה' 
})

// Export the VueRouter instance
export default router;
