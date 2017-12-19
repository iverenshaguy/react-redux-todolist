import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';

const EditTodo = props => {
  return (
    <Button
      buttonType="button"
      btnClass="btn btn-outline-primary"
      buttonText="Edit Todo"
      onClick={props.onClick}
    />
  );
};

EditTodo.proptypes = {
  onClick: PropTypes.func.isRequired
};

export default EditTodo;
