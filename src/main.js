// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueCookie from 'vue-cookie'
// Tell Vue to use the plugin
Vue.use(Vuex)
Vue.use(VueCookie)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  template: '<App/>',
  el: '#app',
  components: { App }
})
