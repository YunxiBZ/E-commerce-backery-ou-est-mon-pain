import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from 'src/components/Cart/CartProduct';
import Button from 'src/components/Button';
import { Link } from 'react-router-dom';
import './styles.scss';

const Cart = (
  {
    productsInCart,
    totalPriceInCart,
    onClickAddQuantityBtn,
    onClickReduceQuantityBtn,
    onChangeQuantityInput,
    onClickDeleteBtn,
    onClickCommandBtn,
  },
) => {
  console.log('productsInCart.onClickAddQuantityBtn', onClickAddQuantityBtn);

  return (
    <div className="cart">
      {productsInCart.map((product) => (
        <CartProduct
          key={product.id}
          {...product}
          onClickAddQuantityBtn={onClickAddQuantityBtn}
          onClickReduceQuantityBtn={onClickReduceQuantityBtn}
          onChangeQuantityInput={onChangeQuantityInput}
          onClickDeleteBtn={onClickDeleteBtn}
        />
      ))}
      <div className="cart__bottom">

        <p className="cart__price-total">Prix total: {totalPriceInCart}</p>
        <Link
          to="/account"
          className="cart__order-link"
        >
          <Button
            className="cart__order-btn"
            value="Valider ma commande"
            handleOrder={
            () => {
              onClickCommandBtn(productsInCart, totalPriceInCart);
            }
          }
          />
        </Link>
      </div>

    </div>
  );
};

Cart.propTypes = {

  productsInCart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
  totalPriceInCart: PropTypes.number,
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
  onClickCommandBtn: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  productsInCart: [],
  totalPriceInCart: 0,
};

export default Cart;
