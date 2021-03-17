import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Order from './Order';

const dailyOrders = ({
  fetchDailyOrders,
  orders,
  validateOrder,
}) => {
  useEffect(() => {
    fetchDailyOrders();
  }, []);

  setTimeout(() => {
    fetchDailyOrders();
  }, 10000);
  return (
    <div className="dailyOrders">
      <h2 className="dailyOrders__title">Commandes journalières</h2>
      { orders ? (
        <ul className="dailyOrders__ordersContainer">
          {
          orders.map((order) => (
            <Order key={order.id} order={order} validateOrder={validateOrder}>Okkk</Order>
          ))
        }
        </ul>
      ) : (
        <div>Pas de commandes pour l'instant 😁</div>
      )}

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
  validateOrder: PropTypes.func.isRequired,
};

export default dailyOrders;
