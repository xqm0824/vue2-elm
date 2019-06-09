import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/router'
import './register'
import store from './store/index'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
