import React from 'react';
import PropTypes from 'prop-types';
import baguette from 'src/assets/image/baguette.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.scss';

const Product = () => (
  <div className="product">
    <h3 className="product__name">Baguette</h3>
    <img className="product__img" src={baguette} alt="image_baguette" />
    <div className="product__bottom">
      <div className="product__quantity">

        <FontAwesomeIcon
          icon="arrow-alt-circle-up"
          className="product__icon product__add-icon"
        />
        <input
          className="product__quantity-input"
          placeholder="Quantité"
          type="text"
        />
        <FontAwesomeIcon
          icon="arrow-alt-circle-down"
          className="product__icon product__reduce-icon"
        />
      </div>

      <p className="product__price">Prix:1.2€ </p>
      <FontAwesomeIcon
        icon="trash-alt"
        className="product__icon product__trash-icon"
      />

    </div>
  </div>
);

Product.propTypes = {};

export default Product;
