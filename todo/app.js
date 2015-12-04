Vue.component('my-tasks', {
  props: ['list', 'new-task'],

  template: '#my-tasks-template',

  computed: {
    complete: function(todo){
      return this.list.filter(this.isCompleted);
    },

    remaining: function(todo) {
      return this.list.filter(this.inProgress);
    }
  },

  methods: {
    isCompleted: function(todo){
      return todo.completed;
    },

    inProgress: function(todo){
      return ! this.isCompleted(todo);
    },

    addTodo: function (todo) {
      var text = this.newTask.trim();
      this.list.push({
        task: text,
        completed: false
      });
      this.newTask = '';
    },

    removeTodo: function (todo) {
      this.list.$remove(todo);
    },

    editTodo: function (todo) {
      this.removeTodo(todo);
      this.newTask = todo.task;
    },
    completed: function(todo){
      todo.completed = ! todo.completed;
    },
    clearAllCompleted: function(){
    this.list = this.list.filter(this.inProgress);
    }
  }
});

new Vue({
  el: '#app',

  data: {
    newTodo: '',
    todos: [{
      task: 'Learn vuejs',
      completed: false
    }, {
      task: 'Build a todo app',
      completed: true
    }]
  }
});
