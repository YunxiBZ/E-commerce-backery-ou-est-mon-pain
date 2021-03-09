import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import Product from './Product';
import './styles.scss';

const Products = ({
  fetchData,
  products,
  onClickAddQuantityBtn,
  onClickReduceQuantityBtn,
  onChangeQuantityInput,
  onClickAddToCartBtn,
}) => {
  useEffect(() => {
    if (products.length > 0) {
      return;
    }
    fetchData();
  }, []);
  console.log('products in Products', products);

  return (
    <div className="products">
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          onClickAddQuantityBtn={onClickAddQuantityBtn}
          onClickReduceQuantityBtn={onClickReduceQuantityBtn}
          onChangeQuantityInput={onChangeQuantityInput}
          onClickAddToCartBtn={onClickAddToCartBtn}
        />
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
  onClickAddQuantityBtn: PropTypes.func.isRequired,
  onClickReduceQuantityBtn: PropTypes.func.isRequired,
  onChangeQuantityInput: PropTypes.func.isRequired,
  onClickAddToCartBtn: PropTypes.func.isRequired,
};

Products.defaultProps = {
  products: null,
};

export default Products;
