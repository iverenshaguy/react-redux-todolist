import { store } from '../../utils';

export const getTodos = () =>
  new Promise((resolve, reject) => {
    const result = store();
    resolve(result);
  });

export const createTodo = todo =>
  new Promise((resolve, reject) => {
    const todos = store();
    const newTodos = [...todos, todo];
    store(newTodos);
    resolve(todo);
  });

export const updateTodo = newTodo =>
  new Promise((resolve, reject) => {
    const todos = store();
    const newTodos = todos.map(
      todo => (todo.id === newTodo.id ? Object.assign({}, todo, newTodo) : todo)
    );
    store(newTodos);
    resolve(newTodo);
  });

export const deleteTodo = id =>
  new Promise((resolve, reject) => {
    const todos = store();
    const newTodos = todos.filter(todo => todo.id !== id);
    store(newTodos);
    resolve({});
  });

export default {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
