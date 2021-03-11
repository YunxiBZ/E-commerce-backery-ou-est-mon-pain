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
  productName,
  productPrice,
  productDescription,
  productImage,
  changeField,
  changeCategories,
  submitNewProduct,
  changeProduct,
  deleteProduct,
  successAddProduct,
  successDeleteProduct,
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

  const handleChangeCategories = (event) => {
    console.log(event.target);
    changeCategories(event.target.value, event.target.id);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitNewProduct();
    // On ferme la modal après envoi du nouveau produit
    onCloseModal();
  };

  const handleChangeProduct = (event) => {
    console.log('ok');
    changeProduct(event.target.value);
  };

  return (
    <div className="adminProduct">
      <section className="adminProduct__addProductContainer">
        <h2 className="adminProduct__title">Produit</h2>
        {successAddProduct && (
          <p className="adminProduct__successMessage">{successAddProduct}</p>
        )}
        {successDeleteProduct && (
          <p className="adminProduct__successMessage">{successDeleteProduct}</p>
        )}
        <button
          value="Ajouter un produit"
          className="adminProduct__addProduct"
          type="button"
          onClick={onOpenModal}
        >
          Ajouter un produit
        </button>
        <Modal open={open} onClose={onCloseModal} center className="adminProduct__modal">
          <form className="adminProduct__form" onSubmit={handleSubmit}>
            <section className="adminProduct__inputsContainer">
              <InputAddProduct
                name="title"
                placeholder="Nom du produit"
                type="text"
                value={productName}
                className="adminProduct__field"
                changeField={changeField}
              />
              <InputAddProduct
                name="description"
                placeholder="Description"
                type="text"
                value={productDescription}
                className="adminProduct__field"
                changeField={changeField}
              />
              <InputAddProduct
                name="price"
                placeholder="Prix"
                type="text"
                value={productPrice}
                className="adminProduct__field"
                changeField={changeField}
              />
              <InputAddProduct
                name="image"
                placeholder="Image"
                type="text"
                value={productImage}
                className="adminProduct__field"
                changeField={changeField}
              />
            </section>
            <section className="adminProduct__dropdownContainer">
              <select
                type="text"
                className="adminProduct__dropdownCategories"
                onChange={handleChangeCategories}
                id="0"
              >
                {categories.map((category) => (
                  <option
                    value={category.id}
                    key={category.id}
                  >
                    {category.label}
                  </option>
                ))}
              </select>
              <select
                type="text"
                className="adminProduct__dropdownCategories"
                onChange={handleChangeCategories}
                id="1"
              >
                {categories.map((category) => (
                  <option
                    value={category.id}
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
        <select
          type="text"
          className="adminProduct__dropdownProducts"
          onChange={handleChangeProduct}
        >
          {products.map((product) => (
            <option
              value={product.id}
              key={product.id}
            >
              {product.title}
            </option>
          ))}
        </select>
        <Button value="Modifier ce produit" />
        <Button
          value="Supprimer ce produit"
          handleDeleteProduct={
          () => {
            deleteProduct();
          }
        }
        />
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
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  productDescription: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  changeCategories: PropTypes.func.isRequired,
  submitNewProduct: PropTypes.func.isRequired,
  changeProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  successAddProduct: PropTypes.string,
  successDeleteProduct: PropTypes.string,
};

AdminProduct.defaultProps = {
  products: null,
  categories: null,
  successAddProduct: null,
  successDeleteProduct: null,
};

export default AdminProduct;
