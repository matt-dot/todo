import { list } from './list'
import { todoList } from './list'





test('check the value of text to equal hello there', () => {
    todoList.forEach((task) => {
        console.log(task.text);
        expect(task.text).toBeDefined;

    });
});

