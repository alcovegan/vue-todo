import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

const findTodoIndex = (state, todo) => {
  return state.todos.indexOf(todo)
}

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    check(state, { todo, status }) {
      const todoIndex = findTodoIndex(state, todo)
      state.todos[todoIndex].done = status
    },
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    editTodo(state, todo) {
      const todoIndex = findTodoIndex(state, todo.editingTodo)
      state.todos[todoIndex].title = todo.newTitle
    },
    removeTodo(state, todo) {
      const todoIndex = findTodoIndex(state, todo)
      state.todos = [...state.todos.slice(0, todoIndex), ...state.todos.slice(todoIndex + 1)]
    }
  },
  actions: {

  },
  getters: {
    pendingTasks: state => {
      return state.todos.filter(task => task.done === false)
    },
    doneTasks: state => {
      return state.todos.filter(task => task.done === true)
    }
  },
  plugins: [createPersistedState()]
})

export default store
