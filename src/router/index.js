import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Demo from '../pages/Demo'
import NotFound from '../pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})