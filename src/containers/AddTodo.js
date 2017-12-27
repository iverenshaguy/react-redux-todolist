import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { addTodo, editTodo, toggleEditTodo } from '../store/Todos/actions';

let AddTodo = props => {
  let input;

  const dispatch = props.dispatch;

  return (
    <div>
      <form
        className="form-inline my-2 my-lg-0"
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            alert('Title is required');
            return;
          }

          if (props.addTodo) {
            const todo = {
              id: uuidv4(),
              title: input.value,
              completed: false
            };

            dispatch(addTodo(todo));
          } else if (props.editTodo) {
            const editedTodo = {
              id: props.todo.id,
              title: input.value,
              completed: false
            };

            dispatch(editTodo(editedTodo));
            dispatch(toggleEditTodo(props.todo.id));
          }

          input.value = '';
        }}
      >
        <input
          className="form-control mr-sm-2 new-todo"
          type="text"
          name="todoinput"
          ref={node => {
            input = node;
          }}
          placeholder="Enter Todo"
          autoFocus={true}
        />
        <button type="submit" className="btn btn-primary my-2 my-sm-0">
          {props.buttonText}
        </button>
      </form>
    </div>
  );
};

AddTodo.proptypes = {
  todo: PropTypes.object,
  addTodo: PropTypes.bool,
  editTodo: PropTypes.bool,
  buttonText: PropTypes.string.isRequired
};

AddTodo = connect()(AddTodo);

export default AddTodo;
