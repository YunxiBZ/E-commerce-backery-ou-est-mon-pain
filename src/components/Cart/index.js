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
  const dateInput = 'reception-date';
  const todayDate = new Date().toISOString().split('T')[0];
  // Limit the possibility of choosing the order days
  function getNextDate(date, day) {
    const dd = new Date(date);
    dd.setDate(dd.getDate() + day);
    const y = dd.getFullYear();
    const m = dd.getMonth() + 1 < 10 ? `0${dd.getMonth() + 1}` : dd.getMonth() + 1;
    const d = dd.getDate() < 10 ? `0${dd.getDate()}` : dd.getDate();
    return `${y}-${m}-${d}`;
  }
  const dateMax = getNextDate(todayDate, 7);

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
          className="cart__label-receptionDate"
        >
          <p>Veuillez choisir le jour de récupération de votre petit bonheur : </p>
          <input
            type="date"
            id={dateInput}
            name={dateInput}
            value={receptionDate}
            className="cart__input-receptionDate"
            // hollow out to choose a date before today
            min={todayDate}
            max={dateMax}
            onChange={(evt) => onReceptionDateChange(evt.target.value)}
          />
        </label>

        <p className="cart__price-total">Prix total: {totalPriceInCart} €</p>
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
