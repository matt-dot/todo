import chalk from 'chalk'
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





export function clear({tasks}: any) {
    let todoList: Todo[] = conf.get("todo-list")


    if (todoList) {
        todoList = todoList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    delete(tasks.index);
                }
                conf.set('todo-list', todoList)
                console.log(conf.get("todo-list"))

            }
            return tasks;

        });

    todoList = tasks;
    conf.set('todo-list', todoList)


    }

    console.log(
        chalk[chalkGreen]('Tasks have been cleared successfully')
    )





}

