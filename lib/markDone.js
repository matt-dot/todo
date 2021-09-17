"use strict";
var conf = new (require("conf"))();
var chalk = require("chalk");
function markDone(_a) {
    var tasks = _a.tasks;
    var todoList = conf.get("todo-list");
    if (todoList) {
        todoList = todoList.map(function (task, index) {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    task.done = true;
                }
            }
            else {
                task.done = true;
            }
            return task;
        });
        conf.set('todo-list', todoList);
    }
    console.log(chalk.green.bold('Tasks have been marked successfully'));
}
module.exports = markDone;
