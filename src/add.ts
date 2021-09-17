const conf = new (require("conf"))();
const chalk = require("chalk");

const todoList = conf.get("todo-list");

function add(task) {
  let todoList = conf.get("todo-list");

  if (!todoList) {
    todoList = [];
  }

  todoList.push({
      text: task,
      done: false
  });


  conf.set('todo-list', todoList)

  console.log(chalk.green.bold("Task added to TODO"))

}

module.exports = add
