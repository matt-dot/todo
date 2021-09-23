import chalk from 'chalk'; // Method 2 import (import everything under namespace)
import Conf from 'conf'; // Method 3 import (default)
import { Todo } from './todo-type';

const conf = new Conf<{ 'todo-list': Array<Todo> }>();



export const todoList = conf.get('todo-list')



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



export function list() {
    if (todoList && todoList.length && todoList !== null) {
        console.log(todoList)
        // Tasks present
        console.log(chalk[chalkYellow]('Task in green are done. Tasks in red are not done'));
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(
                    chalk[chalkGreen](`${index}. ${task.text}`)
                )
            } else {
                console.log(
                    chalk[chalkRed](`${index}. ${task.text}`)
                )
            }
        })
    } else {
        // Tasks not present
        console.log(
            chalk[chalkYellow]('You don\'t have any tasks yet.')
        )
    }

}
