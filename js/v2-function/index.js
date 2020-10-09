// build
const todoList = ['todo1', 'todo2'];

// display
function displayTodoList() {
  console.log(todoList);
}

displayTodoList();

// add
function addTodoList(val) {
  todoList.push(val);
  displayTodoList();
}

addTodoList('todo3');

// update
function updateTodoList(position, val, subVal) {
  todoList.push(val);
  todoList[position] = subVal;
  displayTodoList();
}

updateTodoList(1, 'update', 'test1');


// delete
function deleteTodoList(val, subVal) {
  todoList.splice(val, subVal);
  displayTodoList();
}

deleteTodoList(0, 2);
