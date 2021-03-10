import React, { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import InputAddProduct from './InputAddProduct';

const AdminProduct = ({ products, fetchData }) => {
  useEffect(() => {
    if (products.length > 0) {
      return;
    }
    fetchData();
  }, []);
  // gestion ouverture de la modal ajout de produit via useState
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="adminProduct">
      <section className="adminProduct__addProductContainer">
        <h2 className="adminProduct__title">Produit</h2>
        <button
          value="Ajouter un produit"
          className="adminProduct__addProduct"
          type="button"
          onClick={onOpenModal}
        >
          Ajouter un produit
        </button>
        <Modal open={open} onClose={onCloseModal} center className="adminProduct__modal">
          <form action="test">
            <InputAddProduct
              name="name"
              placeholder="Nom du produit"
              type="text"
              value="truc"
            />
            <InputAddProduct
              name="name"
              placeholder="Description"
              type="text"
              value="truc"
            />
            <InputAddProduct
              name="name"
              placeholder="Prix"
              type="text"
              value="truc"
            />
            <InputAddProduct
              name="name"
              placeholder="Image"
              type="text"
              value="truc"
            />
            <select type="text" className="adminProduct__dropdown">
              {products.map((product) => (
                <option
                  value={product.title}
                  key={product.id}
                >
                  {product.title}
                </option>
              ))}
            </select>
            <div className="modal__button">
              <Button type="submit" value="Ajouter un produit" className="button" />
            </div>
          </form>
        </Modal>
      </section>
      <section className="adminProduct__modifyProductContainer">
        <select type="text" className="adminProduct__dropdown">
          {products.map((product) => (
            <option
              value={product.title}
              key={product.id}
            >
              {product.title}
            </option>
          ))}
        </select>
        <Button value="Modifier ce produit" />
        <Button value="Supprimer ce produit" />
      </section>
    </div>
  );
};

AdminProduct.propTypes = {
  fetchData: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

AdminProduct.defaultProps = {
  products: null,
};

export default AdminProduct;
