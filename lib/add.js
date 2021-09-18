"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
var chalk_1 = __importDefault(require("chalk"));
var conf_1 = __importDefault(require("conf"));
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
    console.log(chalk_1.default[chalkGreen]("Task added to TODO"));
}
exports.add = add;
