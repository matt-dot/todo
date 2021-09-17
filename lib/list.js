"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
var chalk = __importStar(require("chalk")); // Method 2 import (import everything under namespace)
var conf_1 = __importDefault(require("conf")); // Method 3 import (default)
var conf = new conf_1.default();
var todoList = conf.get('todo-list');
function list() {
    if (todoList && todoList.length && todoList !== null) {
        // Tasks present
        console.log(chalk.blue.bold('Task in green are done. Tasks in red are not done'));
        todoList.forEach(function (task, index) {
            if (task.done) {
                console.log(chalk.greenBright(index + ". " + task.text));
            }
            else {
                console.log(chalk.redBright(index + ". " + task.text));
            }
        });
    }
    else {
        // Tasks not present
        console.log(chalk.red.bold('You don\'t have any tasks yet.'));
    }
}
exports.list = list;
