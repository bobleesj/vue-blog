// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import router from './router'
import firebase from 'firebase'
import {config} from './firebaseConfig'

Vue.config.productionTip = false

Vue.use(VueFire)

/* eslint-disable no-new */
new Vue({
  router,
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/')
        console.log('User already logged in')
      } else {
        this.$router.push('/auth')
        console.log('Need to login first')
      }
    })
  },
  template: '<App/>',
  el: '#app',
  components: { App }
})
