import React from 'react';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'src/components/Button';

const SingleProduct = () => {
  const ok = 'ok';
  const url = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80';
  return (
    <div className="singleProduct">
      <section className="singleProduct__leftContainer">
        <header className="singleProduct__infos">
          <h2>Nom du produit</h2>
          <p>Stock</p>
        </header>
        <div className="test">
          Il faudra mettre les ingrédients/description du produit
          Encore meilleur quand on le déguste en pantoufle dans son canapé.
          Ingrédients : Pâte feuilletée, Pomme du verger, Compote de pomme, Oeuf, Beurre, Sucre.
        </div>

        <div className="singleProduct__data">
          <div className="singleProduct__quantityContainer">
            <input
              className="singleProduct__quantity"
              placeholder="Quantité"
              type="text"
              value="{quantity}"
              name="quantity"
            />
            <FontAwesomeIcon
              icon="arrow-alt-circle-up"
              className="singleProduct__AddIcon"
            />
            <FontAwesomeIcon
              icon="arrow-alt-circle-down"
              className="singleProduct__RemoveIcon"
            />
          </div>
          <p className="singleProduct__price">3000€</p>
        </div>

        <Button value="Ajouter au panier" className="singleProduct__button" />
      </section>
      <section className="singleProduct__rightContainer">
        <img src={url} alt="product-img" className="singleProduct__image" />
        <Button value="Ajouter au panier" className="singleProduct__button singleProduct__button--modifier" />
      </section>
    </div>
  );
};

export default SingleProduct;
