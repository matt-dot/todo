import { todoList } from './list';
import { sum } from './sum';

test('basic', () => {
    expect(sum()).toBe(0);
  });

test('basic again', () => {
    expect(sum(1, 2)).toBe(3);
});


test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });


//   test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
//   });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });


  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });




  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  test('the shopping list has milk on it', () => {
    expect(todoList.forEach((task, index) => {
      task.text
    })).toContain(undefined);
    //expect(new Set(shoppingList)).toContain('milk');
  });