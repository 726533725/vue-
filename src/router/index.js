<<<<<<< HEAD
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
=======
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city/:id',
      name: 'City',
      component: City,
      props: true
    }
  ]
})
>>>>>>> e53bc4602d21a7787d1db7b5905cc4530316245b
