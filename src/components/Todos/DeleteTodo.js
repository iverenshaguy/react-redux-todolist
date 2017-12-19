import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';

const DeleteTodo = props => {
  return (
    <Button
      buttonType="button"
      btnClass="close"
      buttonText="&times;"
      onClick={props.onClick}
    />
  );
};

DeleteTodo.proptypes = {
  onClick: PropTypes.func.isRequired
};

export default DeleteTodo;
