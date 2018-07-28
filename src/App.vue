<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <b-alert :show="dismissCountDown"
                   dismissible
                   variant="success"
                   @dismissed="dismissCountDown=0"
                   @dismiss-count-down="countDownChanged">
            <p>New todo is successfully added. This message disappears in {{dismissCountDown}} seconds...</p>
            <b-progress variant="success"
                        :max="dismissSecs"
                        :value="dismissCountDown"
                        height="4px">
            </b-progress>
          </b-alert>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Todo App</h1>
          <add-todo></add-todo>
          <todo-list></todo-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default {
  name: 'app',
  components: {
    'todo-list': TodoList,
    'add-todo': AddTodo
  },
  data () {
    return {
      dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  created() {
    console.log('$store', this.$store.state);

    EventBus.$on('todo-add', () => {
      this.showAlert()
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
