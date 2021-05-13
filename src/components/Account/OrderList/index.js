import React from 'react';
import PropTypes from 'prop-types';

const OrderList = ({ orderList }) =>
  // console.log('orderList', orderList);
  (
    <section className="account__order-list">
      <h2 className="account__order-title">Historique des commandes</h2>
      <ul className="account__order-container">
        {
          orderList.map((order) => (
            <li className="account__item" key={order.id}>
              <p>ID: {order.id}</p>
              <p>Prix Total: {order.total_price} €</p>
              <p>Date de réception: {order.reception_date}</p>
              <p>{order.state}</p>
            </li>
          ))
        }
      </ul>
    </section>
  );
OrderList.propTypes = {
  orderList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      reception_date: PropTypes.string.isRequired,
      total_price: PropTypes.number.isRequired,
      state: PropTypes.string.isRequired,
    }),
  ),
};

OrderList.defaultProps = {
  orderList: null,
};

export default OrderList;
