"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clear = void 0;
var chalk_1 = __importDefault(require("chalk"));
var conf_1 = __importDefault(require("conf")); // Method 3 import (default)
var conf = new conf_1.default();
var ChalkColor;
(function (ChalkColor) {
    ChalkColor["Green"] = "green";
    ChalkColor["Yellow"] = "yellow";
    ChalkColor["Red"] = "red";
})(ChalkColor || (ChalkColor = {}));
function getGreen() {
    var color = ChalkColor.Green;
    return color;
}
function getRed() {
    var color = ChalkColor.Red;
    return color;
}
function getYellow() {
    var color = ChalkColor.Green;
    return color;
}
var chalkGreen = getGreen();
var chalkRed = getRed();
var chalkYellow = getYellow();
function clear(_a) {
    var tasks = _a.tasks;
    var todoList = conf.get("todo-list");
    if (todoList) {
        todoList = todoList.map(function (task, index) {
            if (tasks) {
                if (tasks.indexOf(index.toString()) !== -1) {
                    todoList.splice(index, tasks);
                }
                conf.set('todo-list', todoList);
                console.log(conf.get("todo-list"));
            }
            return tasks;
        });
        todoList = tasks;
        conf.set('todo-list', todoList);
    }
    console.log(chalk_1.default[chalkGreen]('Tasks have been cleared successfully'));
}
exports.clear = clear;
