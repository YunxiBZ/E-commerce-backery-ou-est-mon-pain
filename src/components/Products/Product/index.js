import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import './styles.scss';

const Product = ({
  id,
  title,
  totalPrice,
  image,
  quantity,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
}) => (
  <div className="product">
    <h3 className="product__name">{title}</h3>
    <Link to={`/product/${id}`}>
      <img className="product__img" src={image} alt={`image_${title}`} />
    </Link>
    <div className="product__bottom">
      <div className="product__quantity">

        <FontAwesomeIcon
          icon="arrow-alt-circle-up"
          className="product__icon product__add-icon"
          onClick={() => onClickAddQuantityBtn(title)}
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
              onChangeQuantityInput(quantityInput, title);
            }
          }
        />
        <FontAwesomeIcon
          icon="arrow-alt-circle-down"
          className="product__icon product__reduce-icon"
          onClick={() => {
            console.log('coco');
            onClickReduceQuantityBtn(title);
          }}
        />
      </div>

      <p className="product__price">Prix: {totalPrice}€ </p>

    </div>
    <Button
      className="product__add-to-cart-btn"
      value="Ajouter au panier"
      addInCart={() => {
        console.log('nono');
        onClickAddToCartBtn(
          id,
          title,
          totalPrice,
          image,
          quantity,
        );
      }}
    />
  </div>
);

Product.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickAddToCartBtn: PropTypes.func.isRequired,
};

export default Product;
