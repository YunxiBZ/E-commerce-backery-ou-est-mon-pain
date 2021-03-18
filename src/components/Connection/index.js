import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Connection = ({
  userName,
  onClickLogoutBtn,
  isLogged,
  role,
  cart,
}) => {
  const USER = 'user';

  // const prevCartRef = useRef();
  // // A chaque render de panier on update la ref avec notre props cart
  // useEffect(() => {
  //   prevCartRef.current = cart;
  // });
  // // On crée une const qui contiendra le panier à l'état du render précédent
  // const prevCart = prevCartRef.current;
  // // Je reçois bien le log si j'ajoute un produit dans mon panier,
  // // je vois que cart à une length +1
  // // vis à vis de prevCart
  // // console.log(prevCart, 'prev-cart', cart, 'cart');

  // // On définit une prop qui se mettra à true à chaque fois que le panier
  // // reçoit un nouveau produit
  // const [newCart, setNewCart] = useState(false);
  // const animateTrue = () => setNewCart(true);
  // const animateFalse = () => setNewCart(false);

  // // si notre cart actuel diffère de l'ancien on met le state newCart à true
  // // une seconde après on le met à false
  // // Erreur -> (on tombe dans une loop)
  // // ! Uncaught Error: Too many re-renders.
  // // !React limits the number of renders to prevent an infinite loop
  // // Dans ce cas ->
  // // prevCart et cart sont tous deux un array, pourquoi ne pas comparer leur length ?
  // // si je veux accéder à prevCart.length je reçois ->
  // // !Uncaught TypeError: prevCart is undefined
  // // alors que je le log auparavant ligne 25
  // // et prevCart est bien un array avec une length je le vois bien ligne 25.
  // // ????? comment puis je comparer ces deux valeurs ?
  // if (prevCart !== cart) {
  //   animateTrue();
  //   setTimeout(() => {
  //     animateFalse();
  //   }, 1000);
  // }

  // const [props, set] = useSpring(() => ({ transform: 'scale(0)' }));

  // set({ transform: newCart ? 'scale(0)' : 'scale(1)' });

  return (
    <div className="connection">
      {
        !isLogged && (
          <Link
            to="/login"
            className="connection__link"
          >
            <FontAwesomeIcon
              className="connection__icon"
              icon="user"
            />
          </Link>
        )
      }

      {
        isLogged && (
          <div className="connection__logged">
            <p className="connection__hello">
              Hello {userName}
            </p>
            {/* Flexible icon with different user role in connection */}
            <div className="connection__group-icon">
              <Link
                to={role === USER ? '/account' : '/admin'}
                className="connection__account-btn"
              >
                {role === USER
                  ? (
                    <FontAwesomeIcon
                      className="connection__edit-btn"
                      icon="user-edit"
                    />
                  ) : (
                    <FontAwesomeIcon
                      className="connection__admin-btn"
                      icon="user-cog"
                    />
                  )}
              </Link>
              {(role === USER)
              && (
              <Link
                to="/cart"
                className="connection__cart-link"
              >
                <FontAwesomeIcon
                  className="connection__cart-btn"
                  icon="shopping-basket"
                />
                {cart.length > 0 && (<animated.div className="connection__cart-items">{cart.length}</animated.div>)}
              </Link>
              )}
              <Link
                to="/"
                className="connection__logout-link"
              >
                <FontAwesomeIcon
                  className="connection__logout-btn"
                  icon="sign-out-alt"
                  onClick={() => {
                    localStorage.removeItem('userData');
                    onClickLogoutBtn();
                  }}
                />
              </Link>
            </div>

          </div>
        )
      }
    </div>
  );
};

Connection.propTypes = {
  userName: PropTypes.string.isRequired,
  onClickLogoutBtn: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  role: PropTypes.string,
  cart: PropTypes.array,
};

Connection.defaultProps = {
  role: '',
  cart: null,
};
export default Connection;
