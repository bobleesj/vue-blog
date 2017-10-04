import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Action
const actions = {
  getPost: context => {
    context.commit('appendPost')
  }
}

// the root, initial state object
const state = {
  count: 0,
  currentPost: ``,
  postObject: ``
}

// define the possible mutations that can be applied to our state
const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--,
  appendPost: state => {
    state.currentPost = '1231245343'
  },
  prepareForUpload: state => {
    state.postObject = {
      title: 'This is Bob',
      subtitle: 'This is the subtitle bro'
    }
  }
}

const getters = {
  doneTodos: state => {
    return 'realBro'
  }
}
// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
