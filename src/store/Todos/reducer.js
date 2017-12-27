import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  TOGGLE_EDIT_TODO,
  SET_VISIBILITY_FILTER,
  filters
} from './constants';

const { SHOW_ALL } = filters;

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case EDIT_TODO:
      return state.map(
        todo =>
          todo.id === action.todo.id
            ? Object.assign({}, todo, action.todo)
            : todo
      );
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });
    default:
      return state;
  }
};

export const activeTodo = (state = null, action) => {
  switch (action.type) {
    case TOGGLE_EDIT_TODO:
      return state === null ? action.id : null;
    default:
      return state;
  }
};

export const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};
