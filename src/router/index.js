import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dagre01 from '@/components/dagre/darge01'
import dagre02 from '@/components/dagre/darge02'

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
    },
    {
      path: '/dagre/dagre02',
      name: 'darge02',
      component: dagre02
    }
  ]
})
