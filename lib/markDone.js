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
exports.markDone = void 0;
var chalk = __importStar(require("chalk"));
var conf_1 = __importDefault(require("conf")); // Method 3 import (default)
var conf = new conf_1.default();
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
exports.markDone = markDone;
