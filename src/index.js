import Vue from 'vue'
import App from 'frontend/App.vue'
import { router } from 'frontend/router'

import 'frontend/styles/main.scss'

new Vue({
  el: '#app',
  router: router,
  // store: store,
  render: h => h(App)
})
