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
    (productFoundWithCategory) => (productFoundWithCategory.categories.length === 1),
  );
  // Filter products with two category
  const productsWithTwoCategory = state.products.filter(
    (productFoundWithCategory) => (productFoundWithCategory.categories.length === 2),
  );
  console.log('productsWithTwoCategory', productsWithTwoCategory);
  // Filter products of one category with params
  const productsFilterWithFirstCategory = productsWithOneCategory.filter(
    (productFilter) => (
      (productFilter.categories[0].label.toLowerCase() === category)
    ),
  );
  console.log('productsFilterWithFirstCategory', productsFilterWithFirstCategory);
  // Filter products of two category with params
  const productsFilterWithSecondCategory = productsWithTwoCategory.filter(
    (productFilter) => (
      (productFilter.categories[1].label.toLowerCase() === category)
    )
    ,
  );
  console.log('productsFilterWithSecondCategory', productsFilterWithSecondCategory);

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
