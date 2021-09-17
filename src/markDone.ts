import * as chalk from 'chalk';
import Conf from 'conf'; // Method 3 import (default)
import {Todo} from './todo-type';

const conf = new Conf<{'todo-list': Array<Todo>}>();

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
        chalk.green.bold('Tasks have been marked successfully')
    )
}


