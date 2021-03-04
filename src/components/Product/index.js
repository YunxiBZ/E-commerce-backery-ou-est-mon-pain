import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import './styles.scss';

const Product = ({
  name,
  price,
  image,
  quantity,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickDeleteBtn,
}) => (
  <div className="product">
    <h3 className="product__name">{name}</h3>
    <img className="product__img" src={image} alt={`image_${name}`} />
    <div className="product__bottom">
      <div className="product__quantity">

        <FontAwesomeIcon
          icon="arrow-alt-circle-up"
          className="product__icon product__add-icon"
          onClick={onClickAddQuantityBtn}
        />
        <input
          className="product__quantity-input"
          placeholder="Quantité"
          type="text"
          value={quantity}
          name="quantity"
          onChange={
            (evt) => {
              const quantityInput = evt.target.value;
              console.log(quantityInput);
              onChangeQuantityInput(quantityInput);
            }
          }
        />
        <FontAwesomeIcon
          icon="arrow-alt-circle-down"
          className="product__icon product__reduce-icon"
          onClick={onClickReduceQuantityBtn}
        />
      </div>

      <p className="product__price">Prix:{price}€ </p>
      <FontAwesomeIcon
        icon="trash-alt"
        className="product__icon product__trash-icon"
        onClick={onClickDeleteBtn}
      />

    </div>
    <Button
      className="product__add-to-cart-btn"
      value="Ajouté au panier"
    />
  </div>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickDeleteBtn: PropTypes.func.isRequired,
};

export default Product;
