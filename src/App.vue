<template>
  <div id="app">
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
    }
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
