import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Order = ({ order, validateOrder }) => {
  const handleValidateOrder = (event) => {
    console.log(event.target);
    validateOrder(order.id);
  };

  const orderHasBeenValidate = 'Validé';

  return (
    <div className="dailyOrders__order">
      <ul className="dailyOrders__productsContainer">
        <li className="dailyOrders__entityTitle">Produits</li>
        {/* ici on boucle sur chacun des titres de produit */}
        {
          order.ord_products.map((product) => (
            <li key={product.id} className="dailyOrders__product">{product.title}</li>
          ))
        }
      </ul>
      <ul className="dailyOrders__quantityContainer">
        <li className="dailyOrders__entityTitle">Quantité</li>
        {/* la on boucle sur les quantité de chaque produit */}
        {
          order.products_in_order.map((product) => (
            <li key={product.id} className="dailyOrders__quantity">{product.quantity}</li>
          ))
        }
      </ul>
      <div className="dailyOrders__statusContainer">
        <p className={order.state === orderHasBeenValidate ? 'dailyOrders__statusValid' : 'dailyOrders__statusCheckedIn'}>{order.state}</p>
        <button className="dailyOrders__validateOrder" type="button">Voir le détail</button>
        {/* Si l'order n'est pas validé on affiche le bouton valider la commande */}
        {order.state !== orderHasBeenValidate && (
          <button
            className="dailyOrders__validateOrder"
            type="button"
            onClick={handleValidateOrder}
          >
            Valider la commande
          </button>
        )}
      </div>
      <p className="dailyOrders__totalPrice">{order.total_price}€</p>
    </div>
  );
};

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    total_price: PropTypes.number.isRequired,
    ord_products: PropTypes.array,
    products_in_order: PropTypes.array,
  }),
  validateOrder: PropTypes.func.isRequired,
};

Order.defaultProps = {
  order: null,
};

export default Order;
