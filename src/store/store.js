import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    loginRegist: '',
    userName: sessionStorage.getItem('user') || ''
  },
  getters: {

  },
  mutations: {
    updateLoginRegist (state, v) {
      state.loginRegist = v
      sessionStorage.setItem('loginRegist', v)
    },
    login (state, v) {
      sessionStorage.setItem('user', v)
      state.userName = v
    },
    logout (state, v) {
      state.userName = ''
      sessionStorage.removeItem('user')
    }
  },
  actions: {
  }
})

export default store
