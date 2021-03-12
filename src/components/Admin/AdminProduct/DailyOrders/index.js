import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const dailyOrders = ({ fetchDailyOrders }) => {
  useEffect(() => {
    fetchDailyOrders();
  }, []);

  return (
    <div className="dailyOrders">
      <h2 className="dailyOrders__title">Commandes journalières</h2>
      <ul className="dailyOrders__ordersContainer">
        <li className="dailyOrders__order">ok</li>
        <li className="dailyOrders__order">ok</li>
        <li className="dailyOrders__order">ok</li>
        <li className="dailyOrders__order">ok</li>
        <li className="dailyOrders__order">ok</li>
        <li className="dailyOrders__order">ok</li>
      </ul>
    </div>
  );
};

dailyOrders.propTypes = {
  fetchDailyOrders: PropTypes.func.isRequired,
};

export default dailyOrders;
