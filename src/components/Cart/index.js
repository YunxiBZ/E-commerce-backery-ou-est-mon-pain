import React from 'react';
import PropTypes from 'prop-types';
import CartProduct from 'src/components/Cart/CartProduct';
import Button from 'src/components/Button';
import { Link } from 'react-router-dom';
import './styles.scss';

const Cart = (
  products,
  totalPriceInCart,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickCommandBtn,
) => {
  console.log(products);

  return (
    <div className="cart">
      {products.products.map((product) => (
        <CartProduct
          key={product.id}
          {...product}
          onClickAddQuantityBtn={onClickAddQuantityBtn}
          onClickReduceQuantityBtn={onClickReduceQuantityBtn}
          onChangeQuantityInput={onChangeQuantityInput}
        />
      ))}
      <div className="cart__bottom">

        <p className="cart__price-total">Prix total: </p>
        <Link
          to="/account"
          className="cart__order-link"
        >
          <Button
            onClick={
            (evt) => {
              evt.preventDefault();
              onClickCommandBtn();
            }
          }
            value="Valider ma commande"
            className="cart__order-btn"
          />
        </Link>
      </div>

    </div>
  );
};

Cart.propTypes = {

  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
  totalPriceInCart: PropTypes.number,
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickCommandBtn: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  products: [],
  totalPriceInCart: 0,
};

export default Cart;
