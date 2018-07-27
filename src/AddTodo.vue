<template>
  <b-form @submit="addTodo" @reset="resetTodo" class="add-todo-form">
    <b-form-group id="todoTitleGroup"
                  label="Add new todo:"
                  label-for="todoTitle"
                  description="Add a new to-do">
      <b-form-input id="todoTitle"
                    type="text"
                    v-model="todo.title"
                    required
                    placeholder="Add a new todo">
      </b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Add todo</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
import { EventBus } from './event-bus.js'

export default {
  data() {
    return {
      todo: {
        title: ''
      }
    }
  },
  methods: {
    resetForm() {
      this.todo.title = ''
    },
    addTodo(e) {
      e.preventDefault()
      const { title } = this.todo
      EventBus.$emit('todo-add', { title, done: false })
      this.resetForm()
    },
    resetTodo() {
      this.resetForm()
    }
  }
}
</script>

<style scoped>
.add-todo-form {
  margin-bottom: 2rem;
}
</style>
