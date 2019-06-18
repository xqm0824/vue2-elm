import Vue from 'vue'
import Router from 'vue-router'

import Shop from 'components/shop/shop'
import Home from 'components/home/home'
import Login from 'components/login/login'
import City from 'components/city/city'

Vue.use(Router)

export default new Router({
  //去掉地址中的哈希#，改成历史模式
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'Home',
    },{
      path: '/home',
      name: 'Home',
      component: Home
    },{
      path: '/shop',
      name: 'Shop',
      component: Shop
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/city/:cityid',
      name: 'City',
      component: City
    }
  ]
})