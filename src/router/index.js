import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dagre01 from '@/components/dagre/darge01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dagre/dagre01',
      name: 'darge01',
      component: dagre01
    }
  ]
})
