// build
const todoList = ['todo1', 'todo2'];
console.log(1, todoList);

// add
todoList.push('todo3');
console.log(2, todoList);

// update
todoList[1] = 'test1'
console.log(3, todoList);

// delete
todoList.splice(0, 2)
console.log(4, todoList);
