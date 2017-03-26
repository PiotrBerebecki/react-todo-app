const baseUrl = 'http://localhost:3001/todos';


export const loadServerTodos = () => {
  return fetch(baseUrl)
    .then(res => res.json());
};


export const createServerTodo = (newTodo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTodo)
  }).then(res => res.json());
};


export const updateServerTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
};


export const destroyServerTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
