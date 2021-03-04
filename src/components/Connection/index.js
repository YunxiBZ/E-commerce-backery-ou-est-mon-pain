import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Connection = ({ userName, onClickLogoutBtn, isLogged }) => (
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
          <Link
            to="/"
            className="connection__logout-link"
          >
            <FontAwesomeIcon
              className="connection__logout-btn"
              icon="sign-out-alt"
              onClick={onClickLogoutBtn}
            />
          </Link>

        </div>
      )
    }

  </div>
);

Connection.propTypes = {
  userName: PropTypes.string.isRequired,
  onClickLogoutBtn: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default Connection;
