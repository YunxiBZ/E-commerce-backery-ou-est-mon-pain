import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from 'react-router-dom';
import OrderList from './OrderList';

const Account = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  logged,
  toggleFirstName,
  toggleLastName,
  togglePhone,
  toggleEmail,
  onClickFirstName,
  onClickLastName,
  onClickPhone,
  onClickEmail,
  newFirstName,
  newLastName,
  newPhone,
  newEmail,
  changeInfo,
  submitInfo,
  orderList,
}) => {
  if (!logged) {
    return <Redirect to="/" />;
  }

  return (
    <div className="account">
      <section className="account__userInterface">
        {toggleFirstName ? (
          <div className="account__changeInfo">
            <p className="account__label">{firstName}</p>
            <input
              className="account__input"
              placeholder="Prénom"
              type="text"
              value={newFirstName}
              name="firstName"
              onChange={
                (event) => {
                  changeInfo(event.target.value, event.target.name);
                }
              }
            />
            <div className="account__modify">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => onClickFirstName()}
                className="test333"
              />
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => submitInfo()}
              />
            </div>
          </div>
        )
          : (
            <div className="account__info">
              <p className="account__infoData">{firstName}</p>
              <FontAwesomeIcon
                icon={faPen}
                onClick={() => onClickFirstName()}
              />
            </div>
          )}

        { toggleLastName ? (
          <div className="account__changeInfo">
            <p className="account__label">{lastName}</p>
            <input
              className="account__input"
              placeholder="Nom"
              type="text"
              value={newLastName}
              name="lastName"
              onChange={
                (event) => {
                  changeInfo(event.target.value, event.target.name);
                }
              }
            />
            <div className="account__modify">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => onClickLastName()}
              />
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => submitInfo()}
              />
            </div>
          </div>
        )
          : (
            <div className="account__info">
              <p className="account__infoData">{lastName}</p>
              <FontAwesomeIcon
                icon={faPen}
                onClick={() => onClickLastName()}
              />
            </div>
          )}
        {
          togglePhone ? (
            <div className="account__changeInfo">
              <p className="account__label">{phoneNumber}</p>
              <input
                className="account__input"
                placeholder="Téléphone"
                type="text"
                value={newPhone}
                name="phoneNumber"
                onChange={
                (event) => {
                  changeInfo(event.target.value, event.target.name);
                }
              }
              />
              <div className="account__modify">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => onClickPhone()}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={() => submitInfo()}
                />
              </div>
            </div>
          )
            : (
              <div className="account__info">
                <p className="account__infoData">{phoneNumber}</p>
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => onClickPhone()}
                />
              </div>
            )
        }
        {
          toggleEmail ? (
            <div className="account__changeInfo">
              <p className="account__label">{email}</p>
              <input
                className="account__input"
                placeholder="email"
                type="email"
                value={newEmail}
                name="email"
                onChange={
                (event) => {
                  changeInfo(event.target.value, event.target.name);
                }
              }
              />
              <div className="account__modify">
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => onClickEmail()}
                />
                <FontAwesomeIcon
                  icon={faCheck}
                  onClick={() => submitInfo()}
                />
              </div>
            </div>
          )
            : (
              <div className="account__info">
                <p className="account__infoData">{email}</p>
                <FontAwesomeIcon
                  icon={faPen}
                  onClick={() => onClickEmail()}
                />
              </div>
            )
        }
      </section>
      <OrderList
        orderList={orderList}
      />
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
  toggleLastName: PropTypes.bool.isRequired,
  togglePhone: PropTypes.bool.isRequired,
  toggleEmail: PropTypes.bool.isRequired,
  onClickFirstName: PropTypes.func.isRequired,
  onClickLastName: PropTypes.func.isRequired,
  onClickPhone: PropTypes.func.isRequired,
  onClickEmail: PropTypes.func.isRequired,
  newFirstName: PropTypes.string.isRequired,
  newLastName: PropTypes.string.isRequired,
  newEmail: PropTypes.string.isRequired,
  newPhone: PropTypes.string.isRequired,
  changeInfo: PropTypes.func.isRequired,
  submitInfo: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      reception_date: PropTypes.string.isRequired,
      total_price: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
    }),
  ),
};
Account.defaultProps = {
  orderList: null,
};
export default Account;
