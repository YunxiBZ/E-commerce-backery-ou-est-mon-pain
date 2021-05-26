import React from 'react';
import { animated } from 'react-spring';
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

  return (
    <div className="connection">
      {
        !isLogged && (
          <Link
            to="/login"
            className="connection__link"
            title="Me connecter"
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
