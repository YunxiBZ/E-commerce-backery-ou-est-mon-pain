import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import './styles.scss';
import { setTimeout } from 'core-js';

const Product = ({
  id,
  title,
  price,
  totalPrice,
  image,
  quantity,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
}) => {
  // Label produit ajouté
  const [add, setAdd] = useState(false);
  const setLabel = () => setAdd(true);
  const unsetLabel = () => setAdd(false);
  // Gestion du hover sur un produit si on hover notre props hover
  // Lorsque l'on quitte un produit de la souris hover est à false
  const [hover, setHover] = useState(false);
  const onHoverProduct = () => setHover(true);
  const onMouseOutProduct = () => setHover(false);

  // Animation
  // On définit 3 couleurs que l'on va appliquer au bg-color de notre div
  // en fonction du state du dessus.
  const darkGrey = '#303a44';
  const lightGrey = '#caccc9';
  const [props, set] = useSpring(() => ({ backgroundColor: darkGrey }));
  //
  set({ backgroundColor: hover ? darkGrey : lightGrey });

  return (
    <animated.div style={props} className="product" props={hover.toString()} onMouseEnter={onHoverProduct} onMouseLeave={onMouseOutProduct}>
      <h3 className="product__name">{title}</h3>
      <Link to={`/product/${id}`} className="product__link">
        <img className="product__img" src={image} alt={`image_${title}`} />
        <div className={add ? 'product__label' : 'product__label--modifier'}>Produit ajouté</div>
      </Link>
      <div className="product__bottom">
        <div className="product__quantity">
          <FontAwesomeIcon
            icon="arrow-alt-circle-down"
            className="product__icon product__reduce-icon"
            onClick={() => {
              onClickReduceQuantityBtn(title);
            }}
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
            icon="arrow-alt-circle-up"
            className="product__icon product__add-icon"
            onClick={() => onClickAddQuantityBtn(title)}
          />
        </div>

        <p className="product__price">Prix: {totalPrice}€ </p>

      </div>
      <Button
        className="product__add-to-cart-btn"
        value="Ajouter au panier"
        addInCart={() => {
          onClickAddToCartBtn(
            id,
            title,
            price,
            totalPrice,
            image,
            quantity,
          );
        }}
        onAddProduct={() => {
          setLabel();
          setTimeout(() => {
            unsetLabel();
          }, 3000);
        }}
      />
    </animated.div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickAddToCartBtn: PropTypes.func.isRequired,
};

export default Product;
