import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from 'src/containers/Product';

const Products = ({ fetchData, products }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

Products.propTypes = {
  fetchData: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

Products.defaultProps = {
  products: null,
};

export default Products;
