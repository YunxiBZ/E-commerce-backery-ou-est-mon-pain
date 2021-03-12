import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Order = ({ order }) => {
  const ok = 'truc';

  return (
    <li className="dailyOrders__order">
      <ul className="dailyOrders__productsContainer">
        <li className="dailyOrders__entityTitle">Produits</li>
        {
          order.ord_products.map((product) => (
            <li className="dailyOrders__product">{product.title}</li>
          ))
        }
      </ul>
      <ul className="dailyOrders__quantityContainer">
        <li className="dailyOrders__entityTitle">Quantité</li>
        {
          order.products_in_order.map((product) => (
            <li className="dailyOrders__quantity">{product.quantity}</li>
          ))
        }
      </ul>
      <div className="dailyOrders__statusContainer">
        <p className="dailyOrders__status">{order.state}</p>
        <button className="dailyOrders__validateOrder" type="button">Voir le détail</button>
        <button className="dailyOrders__validateOrder" type="button">Valider la commande</button>
      </div>
      <p className="dailyOrders__totalPrice">{order.total_price}€</p>
    </li>
  );
};

Order.propTypes = {
  order: PropTypes.shape({
    state: PropTypes.string.isRequired,
    total_price: PropTypes.number.isRequired,
    ord_products: PropTypes.array,
    products_in_order: PropTypes.array,
  }),
};

Order.defaultProps = {
  order: null,
};

export default Order;
