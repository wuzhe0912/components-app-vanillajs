var newName = { name: 'Nancy' };
var name = 'Pitt'

function sayMyName() {
  console.log(this.name)
}

var newFunc = sayMyName.bind(newName)
newFunc() // 印出 Nancy