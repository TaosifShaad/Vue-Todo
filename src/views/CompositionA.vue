<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pluginIcon.svg">
    <h3>You have {{todoCount}} Todos!</h3>
    <div>
      <input type="text" placeholder="Add a Todo" v-model="newTodo" @keyup.enter="addTodo">
    </div>
    <div>
      <ul>
        <li v-for="(todo, key) in todos" :key="todo.id">
          <span> {{ todo.name }} </span>
          <button @click="deleteTodo(key)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {reactive, toRefs, computed, watch} from 'vue';

  export default {
    setup() {
      const state = reactive({
        newTodo: '',
        forbidden: ['Montasir', 'Ibrahim'],
        todos: [
        {
          id: 1,
          name: 'one'
        },
        {
          id: 2,
          name: 'two'
        },
        {
          id: 3,
          name: 'three'
        },
        {
          id: 4,
          name: 'four'
        }
      ]
      });

      function addTodo() {
      const obj = {
        id: state.todos.length + 1,
        name: state.newTodo
      };
      state.todos.push(obj);
      state.newTodo = '';
      }

      function deleteTodo(key) {
        state.todos.splice(key, 1);
      }

      let todoCount = computed(() => {
        return state.todos.length;
      });

      watch(state, newValue => {
        if (state.forbidden.includes(newValue.newTodo)) {
          alert("Saying " + newValue.newTodo + " is not allowed!");
          state.newTodo = '';
        }
      });

      return {
        ...toRefs(state),
        addTodo,
        deleteTodo,
        todoCount
      }
    }
  }

</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    width: 200px;
    margin: 20px auto;
  }
  li {
    border: 1px solid;
    display: flex;
    margin-block-end: 10px;
  }
  li span {
    flex-grow: 1;
  }
  img {
    width: 400px;
    height: 400px;
    margin-right: 50px;
  }
  h3 {
    margin-top: 60px;
  }
</style>
