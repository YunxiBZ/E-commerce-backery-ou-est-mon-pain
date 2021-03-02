import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ value, type }) => {
  const test = 'cool';

  return (
    <button
      className="button"
      type={type === 'button' ? 'button' : 'submit'}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  value: 'Envoyer',
  type: 'button',
};

export default Button;
