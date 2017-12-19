import React from 'react';
import './App.css';
import Todos from '../Todos';
import todosApi from '../../helpers/api/todos.api';

const App = () => (
  <div>
    <Todos api={todosApi} />
  </div>
);

export default App;
