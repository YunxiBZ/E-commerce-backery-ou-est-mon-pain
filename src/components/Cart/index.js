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
    fetchOrderList,
    token,
    receptionDate,
    onReceptionDateChange,
  },
) => {
  console.log('productsInCart.onClickAddQuantityBtn', onClickAddQuantityBtn);
  const dateInput = 'reception-date';

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

        <label
          htmlFor={dateInput}
          className="receptionDate__label"
        >
          Veuillez choisir le jour de récupérer votre bonheur :
          <input
            type="date"
            id={dateInput}
            name={dateInput}
            value={receptionDate}
            // hollow out to choose a date before today
            min={new Date().toISOString().split('T')[0]}
            max="2022-12-31"
            onChange={(evt) => onReceptionDateChange(evt.target.value)}
          />
        </label>

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
            onClickCommandBtn(productsInCart, totalPriceInCart, receptionDate);
          }
        }
            fetchOrderList={
          () => {
            fetchOrderList(token);
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
  fetchOrderList: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  receptionDate: PropTypes.string.isRequired,
  onReceptionDateChange: PropTypes.func.isRequired,
};

Cart.defaultProps = {
  productsInCart: [],
  totalPriceInCart: 0,
};

export default Cart;
