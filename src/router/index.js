import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import HelloWorld2 from '@/components/HelloWorld2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/one',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/two',
      name: 'HelloWorld1',
      component: HelloWorld1
    },
    {
      path: '/three',
      name: 'HelloWorld2',
      component: HelloWorld2
    }
  ]
})
