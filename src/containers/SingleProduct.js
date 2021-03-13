import { connect } from 'react-redux';
import SingleProduct from 'src/components/SingleProduct';
import {
  addQuantity,
  reduceQuantity,
  quantityChange,
  addInCart,
} from 'src/actions/products';
import { findProductById } from 'src/selectors/product';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  console.log(findProductById(state.products, parseInt(id, 10)));
  return {
    product: findProductById(state.products, parseInt(id, 10)),
  };
};

const mapDispatchToProps = (dispatch) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
