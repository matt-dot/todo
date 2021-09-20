"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
test('check the value of text to equal hello there', function () {
    list_1.todoList.forEach(function (task) {
        console.log(task.text);
        expect(task.text).toBeDefined;
    });
});
