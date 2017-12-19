import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      type={props.buttonType || 'button'}
      className={props.btnClass || 'btn btn-primary'}
      onClick={() => props.onClick()}
    >
      {props.buttonText}
    </button>
  );
};

Button.proptypes = {
  buttonType: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
