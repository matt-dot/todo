"use strict";
var conf = new (require("conf"))();
var chalk = require("chalk");
var todoList = conf.get("todo-list");
function add(task) {
    var todoList = conf.get("todo-list");
    if (!todoList) {
        todoList = [];
    }
    todoList.push({
        text: task,
        done: false
    });
    conf.set('todo-list', todoList);
    console.log(chalk.green.bold("Task added to TODO"));
}
module.exports = add;
