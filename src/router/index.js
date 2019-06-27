import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Search from '@/pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})
