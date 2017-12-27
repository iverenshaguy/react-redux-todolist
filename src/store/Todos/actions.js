import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_EDIT_TODO,
  SET_VISIBILITY_FILTER
} from './constants';
// import {
//   getTodos,
//   createTodo,
//   updateTodo,
//   deleteTodo
// } from '../../helpers/api/todos.api';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const editTodo = todo => ({
  type: EDIT_TODO,
  todo
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const toggleEditTodo = id => ({
  type: TOGGLE_EDIT_TODO,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
