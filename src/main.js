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
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     console.log(user)
    //     this.$router.push('/about')
    //   } else {
    //     this.$router.push('/auth')
    //   }
    // })
  },
  template: '<App/>',
  el: '#app',
  components: { App }
})
