import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';
import { Redirect } from 'react-router-dom';

const SingleProduct = ({
  product,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
}) => {
  const url = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';
  if (!product) {
    return <Redirect to="/" />;
  }

  return (
    <div className="singleProduct">
      <section className="singleProduct__leftContainer">
        <header className="singleProduct__infos">
          <h2>{product.title} </h2>
          <p>Stock</p>
        </header>
        <div className="test">
          {product.description}
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
        />
      </section>
      <section className="singleProduct__rightContainer">
        <img src={product.image} alt="product-img" className="singleProduct__image" />
        <Button
          value="Ajouter au panier"
          className="singleProduct__button singleProduct__button--modifier"
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
        />
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
};

SingleProduct.defaultProps = {
  product: null,
};
export default SingleProduct;
