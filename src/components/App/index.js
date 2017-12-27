import React from 'react';
import './App.css';
import TodoApp from '../Todos';
// import todosApi from '../../helpers/api/todos.api';

const App = props => (
  <div>
    <TodoApp filter={props.match.params.filter || 'all'} {...props} />
  </div>
);

export default App;
