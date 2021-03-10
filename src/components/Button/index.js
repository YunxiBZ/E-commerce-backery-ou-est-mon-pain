import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({
  value, type, className, addInCart,
}) => {
  const test = 'cool';

  return (
    <button
      className={`button ${className}`}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={() => {
        console.log('click');
        if (addInCart) {
          addInCart();
        }
      }}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  addInCart: PropTypes.func,
};

Button.defaultProps = {
  value: 'Envoyer',
  type: 'button',
  className: '',
  addInCart: null,
};

export default Button;
