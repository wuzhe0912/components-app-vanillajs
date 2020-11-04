const todoList = {
  todoArray: [],

  // 添加事項
  addTodoList(text) {
    this.todoArray.push({
      todoText: text,
      completed: false
    });
    this.displayTodoList();
  },

  // 改變待辦事項狀態
  toggleComplete(position) {
    this.todoArray[position].completed = !this.todoArray[position].completed
    this.displayTodoList();
  },

  displayTodoList () {
    // 待辦事項清空
    if (this.todoArray.length === 0) {
      console.log('Your list is Empty')
    } else {
      for (var i = 0; i < this.todoArray.length; i++) {
        if (this.todoArray[i].completed === false) {
          console.log('()', this.todoArray[i].todoText)
        } else {
          console.log('(x)', this.todoArray[i].todoText)
        }
      }
    }
  }
}
todoList.displayTodoList()
// todoList.addTodoList('todo1');
// todoList.addTodoList('todo2');
// todoList.toggleComplete(1)
// todoList.addTodoList('todo3');

// todoList.toggleComplete(2);
