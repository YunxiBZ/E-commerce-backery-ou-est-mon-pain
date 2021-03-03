import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ value, type, className }) => {
  const test = 'cool';

  return (
    <button
      className={`button ${className}`}
      type={type === 'button' ? 'button' : 'submit'}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  value: 'Envoyer',
  type: 'button',
  className: '',
};

export default Button;
