"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_1 = require("./list");
var sum_1 = require("./sum");
test('basic', function () {
    expect((0, sum_1.sum)()).toBe(0);
});
test('basic again', function () {
    expect((0, sum_1.sum)(1, 2)).toBe(3);
});
test('there is no I in team', function () {
    expect('team').not.toMatch(/I/);
});
//   test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   });
test('adding positive numbers is not zero', function () {
    for (var a = 1; a < 10; a++) {
        for (var b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});
test('null', function () {
    var n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
var shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];
test('the shopping list has milk on it', function () {
    expect(list_1.todoList.forEach(function (task, index) { task.done && task.text; })).toBeDefined();
    //expect(new Set(shoppingList)).toContain('milk');
});
