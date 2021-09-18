import chalk from 'chalk';
import Conf from 'conf';
import {Todo} from './todo-type';

const conf = new Conf<{'todo-list': Array<Todo>}>();

enum ChalkColor {
  Green = 'green',
  Yellow = 'yellow',
  Red = 'red'
}

function getGreen(): ChalkColor {
  let color = ChalkColor.Green;

  return color;
}

function getRed(): ChalkColor {
  let color = ChalkColor.Red;

  return color;
}

function getYellow(): ChalkColor {
  let color = ChalkColor.Green;

  return color;
}

const chalkGreen = getGreen();
const chalkRed = getRed();
const chalkYellow = getYellow();


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

  console.log(chalk[chalkGreen]("Task added to TODO"))

}


