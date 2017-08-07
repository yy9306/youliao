import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home.vue'
import Sort from '@/components/sort/sort.vue'
import Consult from '@/components/consult/consult.vue'
import Cart from '@/components/cart/cart.vue'
import Me from '@/components/me/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/consult',
      component: Consult
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/me',
      component: Me
    }
  ]
})
