"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
var chalk_1 = __importDefault(require("chalk")); // Method 2 import (import everything under namespace)
var conf_1 = __importDefault(require("conf")); // Method 3 import (default)
var conf = new conf_1.default();
var todoList = conf.get('todo-list');
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
function list() {
    if (todoList && todoList.length && todoList !== null) {
        // Tasks present
        console.log(chalk_1.default[chalkYellow]('Task in green are done. Tasks in red are not done'));
        todoList.forEach(function (task, index) {
            if (task.done) {
                console.log(chalk_1.default[chalkGreen](index + ". " + task.text));
            }
            else {
                console.log(chalk_1.default[chalkRed](index + ". " + task.text));
            }
        });
    }
    else {
        // Tasks not present
        console.log(chalk_1.default[chalkYellow]('You don\'t have any tasks yet.'));
    }
}
exports.list = list;
