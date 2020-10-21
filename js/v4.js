const todoList = {
  todoArray: [],

  displayTodoList () {
    console.log(this.todoArray)
  },

  addTodoList(text) {
    this.todoArray.push({
      todoText: text,
      completed: false
    });
    this.displayTodoList();
  },

  toggleComplete(position) {
    this.todoArray[position].completed = !this.todoArray[position].completed
    this.displayTodoList();
  }
}

todoList.addTodoList('todo1');
todoList.addTodoList('todo2');
todoList.addTodoList('todo3');

todoList.toggleComplete(2);


// todoList.deleteTodoList(1, 1)