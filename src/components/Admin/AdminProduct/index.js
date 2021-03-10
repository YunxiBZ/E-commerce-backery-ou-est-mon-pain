import React, { useEffect, useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import InputAddProduct from './InputAddProduct';

const AdminProduct = ({
  products,
  fetchData,
  categories,
  fetchCategories,
}) => {
  useEffect(() => {
    if (products.length < 1) {
      fetchData();
    }
    if (categories.length < 1) {
      fetchCategories();
    }
  }, []);

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
          <form className="adminProduct__form">
            <section className="adminProduct__inputsContainer">
              <InputAddProduct
                name="name"
                placeholder="Nom du produit"
                type="text"
                value="truc"
                className="adminProduct__field"
              />
              <InputAddProduct
                name="name"
                placeholder="Description"
                type="text"
                value="truc"
                className="adminProduct__field"
              />
              <InputAddProduct
                name="name"
                placeholder="Prix"
                type="text"
                value="truc"
                className="adminProduct__field"
              />
              <InputAddProduct
                name="name"
                placeholder="Image"
                type="text"
                value="truc"
                className="adminProduct__field"
              />
            </section>
            <section className="adminProduct__dropdownContainer">
              <select type="text" className="adminProduct__dropdownCategories">
                {categories.map((category) => (
                  <option
                    value={category.label}
                    key={category.id}
                  >
                    {category.label}
                  </option>
                ))}
              </select>
              <select type="text" className="adminProduct__dropdownCategories">
                {categories.map((category) => (
                  <option
                    value={category.label}
                    key={category.id}
                  >
                    {category.label}
                  </option>
                ))}
              </select>
              <div className="adminProduct__addProductButton">
                <Button type="submit" value="Ajouter un produit" className="adminProduct__button" />
              </div>
            </section>
          </form>
        </Modal>
      </section>
      <section className="adminProduct__modifyProductContainer">
        <select type="text" className="adminProduct__dropdownProducts">
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  fetchCategories: PropTypes.func.isRequired,
};

AdminProduct.defaultProps = {
  products: null,
  categories: null,
};

export default AdminProduct;
