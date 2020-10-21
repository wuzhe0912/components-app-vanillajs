const todoList = {
  todoArray: ['todo1', 'todo2'],

  displayTodoList () {
    console.log(this.todoArray)
  },

  addTodoList(item) {
    this.todoArray.push(item);
    this.displayTodoList();
  },

  updateTodoList(position, item, subItem) {
    this.todoArray.push(item);
    this.todoArray[position] = subItem;
    this.displayTodoList();
  },

  deleteTodoList(item, subItem) {
    this.todoArray.splice(item, subItem)
    this.displayTodoList();
  }
}

todoList.addTodoList('todo3');
todoList.updateTodoList(1, 'todo4', 'todo5');
todoList.deleteTodoList(1, 1)