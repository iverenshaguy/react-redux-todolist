import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';

const TodoStatus = props => {
  let buttonText;
  if (props.todo.completed) {
    buttonText = 'Mark as Undone';
  } else {
    buttonText = 'Mark as Done';
  }

  return (
    <Button
      buttonType="button"
      btnClass="btn btn-outline-primary"
      buttonText={buttonText}
      onClick={props.onClick}
    />
  );
};

TodoStatus.proptypes = {
  todo: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodoStatus;
