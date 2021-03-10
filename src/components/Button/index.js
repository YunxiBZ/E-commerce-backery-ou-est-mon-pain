import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({
  value, type, className, addInCart, handleOrder,
}) => {
  const test = 'cool';

  return (
    <button
      className={`button ${className}`}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={() => {
        if (addInCart) {
          addInCart();
        }
        if (handleOrder) {
          handleOrder();
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
  handleOrder: PropTypes.func,
};

Button.defaultProps = {
  value: 'Envoyer',
  type: 'button',
  className: '',
  addInCart: null,
  handleOrder: null,
};

export default Button;
