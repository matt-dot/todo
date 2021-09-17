import * as chalk from 'chalk';
import Conf from 'conf'; // Method 3 import (default)
import {Todo} from './todo-type';

const conf = new Conf<{'todo-list': Array<Todo>}>();




export function clear({tasks}: any) {
    let todoList: Todo[] = conf.get("todo-list")

    if (todoList) {
        todoList = todoList.map((task, index) => {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    delete tasks.index
                    return tasks;
                }
                conf.set('todo-list', todoList)
                console.log(conf.get("todo-list"))

            }

        });

    todoList = tasks;
    conf.set('todo-list', todoList)


    }

    console.log(
        chalk.green.bold('Tasks have been cleared successfully')
    )
}

