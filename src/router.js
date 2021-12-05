import EventsPage from 'frontend/components/events/EventsExample.vue'
import FormPage from 'frontend/components/FormPage.vue'
import Settings from 'frontend/components/Settings.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'form-page',
    component: FormPage,
  },
  {
    path: '/settings',
    name: 'settings-page',
    component: Settings,
  },
  {
    path: '/events',
    name: 'events-page',
    component: EventsPage,
  },
]

export const router = new VueRouter({
  routes,
})
