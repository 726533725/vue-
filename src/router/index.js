import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
<<<<<<< HEAD
import Daytrip from '@/pages/daytrip'
=======
import Detail from '@/pages/detail'
>>>>>>> 20180416-index-h
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
<<<<<<< HEAD
      component: City
    },{
      path: '/daytrip',
      name: 'Daytrip',
      component: Daytrip
    } 
=======
      component: City,
      props: true
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    }
>>>>>>> 20180416-index-h
  ]
})
