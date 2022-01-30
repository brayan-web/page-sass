import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Filter from '../components/Filter.vue'
import NavNavigation from '../components/NavNavigation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/filter',
    name: 'flter',
    component: Filter
  },
  {
    path: '/nav',
    name: 'NavBar',
    component: NavNavigation
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
