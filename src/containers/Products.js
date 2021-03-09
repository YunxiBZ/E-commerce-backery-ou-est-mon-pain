import { connect } from 'react-redux';
import Products from 'src/components/Products';
import {
  fetchProducts,
  addQuantity,
  reduceQuantity,
  quantityChange,
  addInCart,
} from 'src/actions/products';

const mapStateToProps = (state) => ({
  products: state.products,
});

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
    totalPrice,
    image,
    quantity,
  ) => {
    const action = addInCart(
      id,
      title,
      totalPrice,
      image,
      quantity,
    );
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
