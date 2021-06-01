import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList'
import EventCreate from '../views/EventCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/events/:id',
    name: 'event-show',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventShow.vue')
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/user/:username',
    name: 'user',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '*',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/FileNotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
