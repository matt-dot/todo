"use strict";
var conf = new (require("conf"))();
var chalk = require("chalk");
function clear(_a) {
    var tasks = _a.tasks;
    var todoList = conf.get("todo-list");
    if (todoList) {
        todoList = todoList.map(function (task, index) {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    delete tasks.index;
                }
                conf.set('todo-list', todoList);
                console.log(conf.get("todo-list"));
            }
        });
        todoList = '';
        conf.set('todo-list', todoList);
    }
    console.log(chalk.green.bold('Tasks have been cleared successfully'));
}
module.exports = clear;