import Vue from 'vue'
import Router from 'vue-router'
//connections
import overview from '../components/rabbitMQ/overview'
import connections from '../components/rabbitMQ/connections'
import channels from '../components/rabbitMQ/channels'
import exchanges from '../components/rabbitMQ/exchanges'
import queues from '../components/rabbitMQ/queues'

import chart from '../test/chart/chart.vue'
import example1 from '../views/example1'
import test from '../components/rabbitMQ/overview/total/rates'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/chart',
      name: 'chart',
      component: chart
    },
    {
      path: '/',
      name: 'overview',
      component: overview
    },
    {
      path: '/connec',
      name: 'connec',
      component: connections
    },
    {
      path: '/channels',
      name: 'channels',
      component: channels
    },
    {
      path: '/exchanges',
      name: 'exchanges',
      component: exchanges
    },
    {
      path: '/queues',
      name: 'queues',
      component: queues
    },
    {
      path: '/example1',
      name: 'example1',
      component: example1
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
