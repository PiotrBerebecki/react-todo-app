import {addTodo, findById, toggleTodo, updateTodos, removeTodo, filterTodos} from './todoHelpers';

test('addTodo should add the passed todo to the list', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ];
  const newTodo = {id:3, name: 'three', isComplete: false};
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const result = addTodo(existingTodos, newTodo);

  expect(result).toEqual(expected);
});


test('addTodo should not mutate the existing todo array', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false}
  ];
  const newTodo = {id:3, name: 'three', isComplete: false};
  const result = addTodo(existingTodos, newTodo);

  expect(result).not.toBe(existingTodos);

});


test('findById should return the expected item from an array', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const expected = {id:2, name: 'two', isComplete: false};
  const result = findById(2, existingTodos);
  expect(result).toEqual(expected);
});


test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const startTodo = {id:2, name: 'two', isComplete: false};
  const expected = {id:2, name: 'two', isComplete: true};
  const result = toggleTodo(startTodo);
  expect(result).toEqual(expected);
});


test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id:2, name: 'two', isComplete: false};
  const result = toggleTodo(startTodo);
  expect(result).not.toBe(startTodo);
});


test('updateTodos should update an item by id', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id:2, name: 'two', isComplete: true};
  const expectedTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ];

  const result = updateTodos(existingTodos, updatedTodo);

  expect(result).toEqual(expectedTodos);
});


test('updateTodos should not mutate the original array', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const updatedTodo = {id:2, name: 'two', isComplete: true};

  const result = updateTodos(existingTodos, updatedTodo);

  expect(result).not.toBe(existingTodos);
});


test('removeTodo should remove an item by id', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const id = 2;
  const expectedTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const result = removeTodo(existingTodos, id);

  expect(result).toEqual(expectedTodos);
});


test('removeTodo should not mutate the original array', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];
  const id = 2;
  const result = removeTodo(existingTodos, id);

  expect(result).not.toBe(existingTodos);
});


test('filterTodos should return all items for the root route', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ];

  const result = filterTodos(existingTodos, '/');

  expect(result).toEqual(existingTodos);
});


test('filterTodos should return only completed items for the complete route', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ];
  const expected = [
    {id:2, name: 'two', isComplete: true}
  ];

  const result = filterTodos(existingTodos, '/complete');

  expect(result).toEqual(expected);
});


test('filterTodos should return only incompleted items for the active route', () => {
  const existingTodos = [
    {id:1, name: 'one', isComplete: false},
    {id:2, name: 'two', isComplete: true},
    {id:3, name: 'three', isComplete: false}
  ];
  const expected = [
    {id:1, name: 'one', isComplete: false},
    {id:3, name: 'three', isComplete: false}
  ];

  const result = filterTodos(existingTodos, '/active');

  expect(result).toEqual(expected);
});
