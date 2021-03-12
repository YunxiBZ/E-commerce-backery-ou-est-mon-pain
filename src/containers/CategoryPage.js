import { connect } from 'react-redux';
import CategoryPage from 'src/components/CategoryPage';
import {
  fetchProducts,
  addQuantity,
  reduceQuantity,
  quantityChange,
  addInCart,
} from 'src/actions/products';

const mapStateToProps = (state, ownProps) => {
  // Get category from params
  const { category } = ownProps.match.params;

  // Filter products with one category
  const productsWithOneCategory = state.products.filter(
    (productFoundWithCategory) => (
      productFoundWithCategory.categories.length === 1
    ),
  );
  // Filter products with two categories
  const productsWithTwoCategories = state.products.filter(
    (productFoundWithCategory) => (
      productFoundWithCategory.categories.length === 2
    ),
  );
  // Filter products of one category with params
  const productsFilterWithFirstCategory = productsWithOneCategory.filter(
    // The trim() method removes whitespace from both ends of a string.
    (productFilter) => productFilter.categories[0].label.toLowerCase().trim() === category.trim(),
  );
  // Filter products of two categories with params
  const productsFilterWithSecondCategory = productsWithTwoCategories.filter(
    (productFilter) => (
      productFilter.categories[1].label.toLowerCase().trim() === category.trim()
    ),
  );

  return {
    productsByCategory: [...productsFilterWithFirstCategory, ...productsFilterWithSecondCategory],
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
