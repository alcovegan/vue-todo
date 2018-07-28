import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    check(state, { todo, status }) {
      const todoIndex = state.todos.indexOf(todo)
      state.todos[todoIndex].done = status
    },
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    editTodo(state, todo) {
      const todoIndex = state.todos.indexOf(todo.editingTodo)
      state.todos[todoIndex].title = todo.newTitle
    }
  },
  actions: {

  },
  getters: {

  },
  plugins: [createPersistedState()]
})

export default store
