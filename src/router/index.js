import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Box from '@/components/Box'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/box',
      name: 'Box',
      component: Box
    }
  ]
})
