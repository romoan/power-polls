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

// function hasQueryParams (route) {
//   return !!Object.keys(route.query).length
// }

// function isSamePath (to, from) {
//   return to.path === from.path
// }

// router.beforeEach((to, from, next) => {
//   if (!hasQueryParams(to) && hasQueryParams(from) && isSamePath(to, from)) {
//     next(Object.assign({}, to, { query: from.query }))
//   } else {
//     next()
//   }
// })
