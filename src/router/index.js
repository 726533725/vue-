import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Detail from '@/pages/detail'
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
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      props: true
    }
  ]
})
