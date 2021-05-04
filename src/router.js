import Vue from 'vue'
import VueRouter from 'vue-router'
import FormPage from 'frontend/components/FormPage.vue'

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
]

export const router = new VueRouter({
  routes
})
