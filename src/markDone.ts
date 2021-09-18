import chalk from 'chalk';
import Conf from 'conf'; // Method 3 import (default)
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

export function markDone({tasks}: any) {
    let todoList = conf.get("todo-list")

    if (todoList) {
        todoList = todoList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    task.done = true
                }
            } else {
                task.done = true
            }
            return task
        });

    conf.set('todo-list', todoList)


    }

    console.log(
        chalk[chalkGreen]('Tasks have been marked successfully')
    )
}


