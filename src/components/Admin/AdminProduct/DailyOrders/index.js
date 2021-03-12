import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Order from './Order';

const dailyOrders = ({
  fetchDailyOrders,
  orders,
}) => {
  useEffect(() => {
    fetchDailyOrders();
  }, []);
  console.log(orders);

  return (
    <div className="dailyOrders">
      <h2 className="dailyOrders__title">Commandes journalières</h2>
      <ul className="dailyOrders__ordersContainer">
        {
          orders.map((order) => (
            <Order key={order.id} order={order}>Okkk</Order>
          ))
        }
      </ul>
    </div>
  );
};

dailyOrders.propTypes = {
  fetchDailyOrders: PropTypes.func.isRequired,
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default dailyOrders;
