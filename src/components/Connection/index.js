import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Connection = () => (
  <div className="connection">
    <Link
      to="/login"
      className="connection__link"
    >
      <FontAwesomeIcon
        className="connection__icon"
        icon="user"
      />
    </Link>

  </div>
);

export default Connection;
