import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({
  value,
  type,
  className,
  addInCart,
  openModal,
  handleOrder,
  fetchOrderList,
  handleDeleteProduct,
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
        if (openModal) {
          openModal();
        }
        if (handleOrder) {
          handleOrder();
          fetchOrderList();
        }
        if (handleDeleteProduct) {
          handleDeleteProduct();
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
  openModal: PropTypes.func,
  handleOrder: PropTypes.func,
  handleDeleteProduct: PropTypes.func,
  fetchOrderList: PropTypes.func,
};

Button.defaultProps = {
  value: 'Envoyer',
  type: 'button',
  className: '',
  addInCart: null,
  openModal: null,
  handleOrder: null,
  handleDeleteProduct: null,
  fetchOrderList: null,
};

export default Button;
