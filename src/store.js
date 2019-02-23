import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: []
  },
  mutations: {
    PUSH_IN_HISTORY (state, item) {
      console.log(state);
      state.history.push(item)
    }
  },
  actions: {
    pushInHistory ({ commit }, item) {
      commit('PUSH_IN_HISTORY', item)
    }
  }
})
