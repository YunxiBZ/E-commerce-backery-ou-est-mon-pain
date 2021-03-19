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
    errorMessage,
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
  const noQuantity = productsInCart.find((product) => product.quantity === 0);

  return (
    <div className="cart">
      {errorMessage && (
        <p className="cart__errorMessage">{errorMessage}</p>
      )}
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
        { productsInCart.length > 0 ? (
          <div className="cart__bottom">
            <label
              htmlFor={dateInput}
              className="cart__label-receptionDate"
            >
              <p>Veuillez choisir le jour de récupération de votre petit bonheur :</p>
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
              to={noQuantity ? '/cart' : '/account'}
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
        ) : (
          <div className="cart__empty">
            <h2 className="cart__title-empty">Votre panier est vide ...</h2>
            <Link
              to="/products"
              className="cart__link-products"
            >
              <Button
                value="Voir les produits"
                className="cart__button-products"
              />
            </Link>
          </div>
        )}

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
  errorMessage: PropTypes.string,
};

Cart.defaultProps = {
  productsInCart: [],
  totalPriceInCart: 0,
  errorMessage: null,
};

export default Cart;
