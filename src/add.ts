import * as chalk from 'chalk';
import Conf from 'conf';
import {Todo} from './todo-type';

const conf = new Conf<{'todo-list': Array<Todo>}>();


export function add(task: any) {
  let todoList = conf.get("todo-list");

  if (!todoList) {
    todoList = [];
  }

  todoList.push({
      text: task,
      done: false
  });


  conf.set('todo-list', todoList)

  console.log(chalk.green("Task added to TODO"))

}


