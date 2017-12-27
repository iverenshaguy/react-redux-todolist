import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = props => {
  const {
    todos,
    activeTodo,
    editTodoToggle,
    handleDeleteTodo,
    handleTodoStatus
  } = props;

  const todoItems = todos
    .slice(0)
    .reverse()
    .map(todo => {
      return (
        <div key={todo.id} id={`todoitem-${todo.id}`}>
          <TodoItem
            todo={todo}
            activeTodo={activeTodo}
            editTodoToggle={() => editTodoToggle(todo.id)}
            handleDeleteTodo={() => handleDeleteTodo(todo.id)}
            handleTodoStatus={() => handleTodoStatus(todo.id)}
          />
        </div>
      );
    });

  return (
    <div>
      <h3>Todos ({todos.length})</h3>
      <hr />
      {todoItems}
    </div>
  );
};

TodoList.defaultProps = {
  activeTodo: null
};

TodoList.proptypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  activeTodo: PropTypes.number,
  editTodoToggle: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleTodoStatus: PropTypes.func.isRequired
};

export default TodoList;
