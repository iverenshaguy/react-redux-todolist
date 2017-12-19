import { todos } from '../../../__mocks__/todos.mock.json';

export const getTodos = () =>
  new Promise((resolve, reject) => {
    resolve(todos);
  });

export const createTodo = todo =>
  new Promise((resolve, reject) => {
    resolve(todo);
  });

export const updateTodo = newTodo =>
  new Promise((resolve, reject) => {
    resolve(newTodo);
  });

export const deleteTodo = id =>
  new Promise((resolve, reject) => {
    resolve({});
  });

export default {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
