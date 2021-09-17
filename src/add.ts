import * as chalk from 'chalk';
import * as Conf from 'conf';

const conf = new Conf();



const todoList = conf.get("todo-list");

export function add(task) {
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


