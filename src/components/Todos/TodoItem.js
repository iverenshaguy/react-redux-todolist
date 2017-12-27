import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddTodo from '../../containers/AddTodo';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import TodoStatus from './TodoStatus';
import './TodoItem.css';

const TodoItem = props => {
  const { todo } = props;

  const editForm = classNames({
    hide: props.activeTodo !== todo.id,
    show: props.activeTodo === todo.id
  });

  const todoTitle = classNames({
    show: props.activeTodo !== todo.id,
    hide: props.activeTodo === todo.id
  });

  let completed;

  if (todo.completed) {
    completed = 'Completed';
  } else {
    completed = 'Not Completed';
  }

  return (
    <div className="TodoItem">
      <div className="card border-primary">
        <div className="card-body">
          <DeleteTodo onClick={props.handleDeleteTodo} />
          <blockquote className="card-blockquote">
            <p className={todoTitle}>
              {todo.title}&nbsp;&nbsp;
              <span className="badge badge-primary">{completed}</span>
            </p>
            <div className={editForm}>
              <AddTodo editTodo todo={todo} buttonText="Update Todo" />
            </div>
            <br />
            <footer>
              <EditTodo onClick={props.editTodoToggle} />&nbsp;&nbsp;
              <TodoStatus todo={todo} onClick={props.handleTodoStatus} />
            </footer>
          </blockquote>
        </div>
      </div>
      <br />
    </div>
  );
};

TodoItem.proptypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  editTodoToggle: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleTodoStatus: PropTypes.func.isRequired
};

export default TodoItem;
