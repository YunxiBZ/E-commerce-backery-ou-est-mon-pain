import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import { Redirect } from 'react-router-dom';
import ScrollToTop from 'src/hooks/ScrollToTop';

const SingleProduct = ({
  product,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
  logged,
}) => {
  if (!product) {
    return <Redirect to="/" />;
  }
  // Label produit ajouté
  const [add, setAdd] = useState(false);
  const setLabel = () => setAdd(true);
  const unsetLabel = () => setAdd(false);

  ScrollToTop();

  return (
    <div className="singleProduct">
      <section className="singleProduct__leftContainer">
        <header className="singleProduct__infos">
          <h2 className="singleProduct__productTitle">{product.title} </h2>
          <p className="singleProduct__stock">disponible</p>
        </header>
        <div className="singleProduct__productDescription">
          {/*
          Handle description of product just for display, because of the format data of description
          */}
          {
            product.description.split('I')[0]
          }
          <div className="singleProduct__ingredients">
            <p>Ingédients: </p>
            {
            product.description.split(':')[1]
          }

          </div>
        </div>

        <div className="singleProduct__data">
          <div className="singleProduct__quantityContainer">
            <FontAwesomeIcon
              icon="arrow-alt-circle-down"
              className="singleProduct__RemoveIcon"
              onClick={() => onClickReduceQuantityBtn(product.title)}
            />
            <input
              className="singleProduct__quantity"
              placeholder="Quantité"
              type="text"
              value={product.quantity}
              name="quantity"
              onChange={
                (event) => {
                  const quantityInput = event.target.value;
                  onChangeQuantityInput(quantityInput, product.title);
                }
              }
            />
            <FontAwesomeIcon
              icon="arrow-alt-circle-up"
              className="singleProduct__AddIcon"
              onClick={() => onClickAddQuantityBtn(product.title)}
            />
          </div>
          <p className="singleProduct__price">{product.totalPrice}€</p>
        </div>

        <Button
          value="Ajouter au panier"
          className="singleProduct__button"
          addInCart={() => {
            onClickAddToCartBtn(
              product.id,
              product.title,
              product.price,
              product.totalPrice,
              product.image,
              product.quantity,
            );
          }}
          onAddProduct={() => {
            setLabel();
            setTimeout(() => {
              unsetLabel();
            }, 2000);
          }}
        />
      </section>
      <section className="singleProduct__rightContainer">
        <img src={product.image} alt="product-img" className="singleProduct__image" />
        <div className={add ? 'singleProduct__label' : 'singleProduct__label--modifier'}>{logged ? 'Produit ajouté' : 'Produit ajouté - connectez-vous 🥖'}</div>
      </section>
    </div>
  );
};

SingleProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickAddToCartBtn: PropTypes.func.isRequired,
  logged: PropTypes.bool,
};

SingleProduct.defaultProps = {
  product: null,
  logged: null,
};
export default SingleProduct;
