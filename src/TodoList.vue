<template>
  <div>
    <h2>Pending tasks</h2>
    <ul class="list-group tasks tasks--pending">
      <li v-for="(todo, index) in pendingTasks" class="list-group-item">
        <span>{{ todo.title }}</span>
        <div>
          <a href="#" @click="editTodo(todo)">edit todo</a> |
          <a href="#" @click="check(todo, true)">done</a> |
          <a href="#" @click="remove(todo)">delete</a>
        </div>
      </li>
    </ul>

    <b-form @submit="doneEdit" v-show="isTodoEditing">
      <b-form-group id="todoEditGroup"
                    label="Edit todo:"
                    label-for="todoTitle"
                    description="New todo title">
        <b-form-input id="todoTitle"
                      type="text"
                      v-model="todo.title"
                      required
                      placeholder="Edit a todo">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Save changes</b-button>
    </b-form>


    <h2>Done tasks</h2>
    <ul class="list-group tasks tasks--done">
      <li v-for="todo in doneTasks" class="list-group-item task--done" @click="check(todo, false)">
        <s>{{ todo.title }}</s>
      </li>
    </ul>
  </div>
</template>

<script>
import { EventBus } from './event-bus.js'
import { mapGetters } from 'vuex'

export default {
  name: 'TodoList',
  data() {
    return {
      isTodoEditing: false,
      editingTodo: null,
      todo: {
        title: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'pendingTasks',
      'doneTasks'
    ])
  },
  methods: {
    check(todo, status) {
      this.$store.commit('check', { todo, status })
    },
    remove(todo) {
      this.$store.commit('removeTodo', todo)
    },
    doneEdit() {
      this.$store.commit('editTodo', { editingTodo: this.editingTodo, newTitle: this.todo.title })
      this.isTodoEditing = false
      this.editingTodo = null
      this.todo.title = ''
    },
    editTodo(todo) {
      this.editingTodo = todo
      this.isTodoEditing = true
      this.todo.title = todo.title
    }
  }
}
</script>

<style>
.tasks {
  cursor: pointer;
}

.tasks--pending {
  margin-bottom: 2rem;
}

.task--done {
  background: antiquewhite;
}
</style>
