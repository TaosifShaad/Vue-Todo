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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Option',
  data() {
    return {
      forbidden: ['Montasir', 'Ibrahim'],
      newTodo: '',
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
    }
  }, 
  methods: {
    addTodo() {
      const obj = {
        id: this.todos.length + 1,
        name: this.newTodo
      };
      this.todos.push(obj);
      this.newTodo = '';
    },
    deleteTodo(key) {
      this.todos.splice(key, 1);
    }
  },
  computed: {
    todoCount() {
      return this.todos.length;
    }
  },
  watch: {
    newTodo(newValue) {
      if (this.forbidden.includes(this.newTodo)) {
        this.newTodo = '';
        alert('Saying ' + newValue + ' is not allowed!!');
      }
    }
  }
};
</script>

<style>
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
