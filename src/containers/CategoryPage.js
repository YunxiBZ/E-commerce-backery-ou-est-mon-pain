import { connect } from 'react-redux';
import CategoryPage from 'src/components/CategoryPage';
import {
  fetchProducts,
  addQuantity,
  reduceQuantity,
  quantityChange,
  addInCart,
} from 'src/actions/products';
// Import selector findProductsByCategory
import findProductsByCategory from 'src/selectors/category';

const mapStateToProps = (state, ownProps) => {
  // Get category from params
  const { category } = ownProps.match.params;
  // Use Category selector for filter products
  const ProductsByCategory = findProductsByCategory(state.products, category);
  return {
    productsByCategory: ProductsByCategory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchProducts());
  },
  onClickAddQuantityBtn: (product) => {
    const action = addQuantity(product);
    dispatch(action);
  },
  onClickReduceQuantityBtn: (product) => {
    const action = reduceQuantity(product);
    dispatch(action);
  },
  onChangeQuantityInput: (payload, title) => {
    const action = quantityChange(parseFloat(payload), title);
    dispatch(action);
  },
  onClickAddToCartBtn: (
    id,
    title,
    price,
    totalPrice,
    image,
    quantity,
  ) => {
    const action = addInCart(
      id,
      title,
      price,
      totalPrice,
      image,
      quantity,
    );
    dispatch(action);
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
