import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {

  },
  actions: {

  },
  getters: {

  },
  plugins: [createPersistedState()]
})

export default store
