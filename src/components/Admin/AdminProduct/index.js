import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import Button from 'src/components/Button';

const AdminProduct = ({ products, fetchData }) => {
  useEffect(() => {
    if (products.length > 0) {
      return;
    }
    fetchData();
    console.log('ok');
  }, []);

  return (
    <div className="adminProduct">
      <section className="adminProduct__addProductContainer">
        <h2 className="adminProduct__title">Produit</h2>
        <Button value="Ajouter un produit" className="adminProduct__addProduct" />
      </section>
      <section className="adminProduct__modifyProductContainer">
        <select type="text" className="adminProduct__dropdown">
          { products.map((product) => <option value={product.title}>{product.title}</option>)}
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
