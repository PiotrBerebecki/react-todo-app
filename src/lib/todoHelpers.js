export const addTodo = (existingTodos, newTodo) => [...existingTodos, newTodo];


export const findById = (id, existingTodos) => existingTodos.find(todo => todo.id === id);


export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete });


export const updateTodos = (existingTodos, updatedTodo) => {
  const updateTodoIndex = existingTodos.findIndex(todo => todo.id === updatedTodo.id);

  return [
    ...existingTodos.slice(0, updateTodoIndex),
    updatedTodo,
    ...existingTodos.slice(updateTodoIndex + 1)
  ];
};


export const removeTodo = (existingTodos, id) => existingTodos.filter(todo => todo.id !== id);


export const filterTodos = (existingTodos, type) => {
  switch(type) {
    case '/active':
      return existingTodos.filter(todo => !todo.isComplete);
    case '/complete':
      return existingTodos.filter(todo => todo.isComplete);
    default:
      return existingTodos;
  }
};
