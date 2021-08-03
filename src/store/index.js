import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideStatus: false
  },
  getters: {
    getAsideStatus (state) {
      return state.asideStatus
    }
  },
  mutations: {
    setAsideStatusM (state, status) {
      state.asideStatus = status
    }
  },
  actions: {
    setAsideStatusMm (context, status) {
      context.commit('setAsideStatusM', status)
    }
  },
  modules: {
    setAsideStatus (state, status) {
      state.asideStatus = status
    }
  }
})
