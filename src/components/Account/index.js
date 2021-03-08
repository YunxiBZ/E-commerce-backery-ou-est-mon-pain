import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';

const Account = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  logged,
  toggleFirstName,
}) => {
  console.log(logged);
  if (!logged) {
    console.log(logged);
    return <Redirect to="/" />;
  }

  return (
    <div className="account">
      <section className="account__userInterface">
        {toggleFirstName ? (
          <div>Ok</div>
        )
          : (
            <div className="account__info">
              <p className="account__infoData">{firstName}</p>
              <FontAwesomeIcon
                icon={faPen}
              />
            </div>
          )}

        <div className="account__info">
          <p className="account__infoData">{lastName}</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
        <div className="account__info">
          <p className="account__infoData">{phoneNumber}</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
        <div className="account__info">
          <p className="account__infoData">{email}</p>
          <FontAwesomeIcon
            icon={faPen}
          />
        </div>
      </section>
    </div>
  );
};

Account.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  logged: PropTypes.bool.isRequired,
  toggleFirstName: PropTypes.bool.isRequired,
};

export default Account;
