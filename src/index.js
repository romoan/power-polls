import 'frontend/styles/main.scss'
import App from 'frontend/App.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import { router } from 'frontend/router'
import { store } from 'frontend/store/store'

Vue.use(VueResource)

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App),
})
