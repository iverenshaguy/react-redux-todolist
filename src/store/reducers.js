import { combineReducers } from 'redux';
import { todos, visibilityFilter, activeTodo } from './Todos/reducer';

export default combineReducers({
  todos,
  visibilityFilter,
  activeTodo
});
