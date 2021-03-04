import { connect } from 'react-redux';
import Product from 'src/components/Products/Product';
import {
  addQuantity, reduceQuantity, quantityChange, deleteProduct,
} from 'src/actions/product';

const mapStateToProps = (state) => ({
  quantity: state.product.productQuantity,
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddQuantityBtn: () => {
    const action = addQuantity();
    dispatch(action);
  },
  onClickReduceQuantityBtn: () => {
    const action = reduceQuantity();
    dispatch(action);
  },
  onChangeQuantityInput: (payload) => {
    const action = quantityChange(parseFloat(payload));
    dispatch(action);
  },
  onClickDeleteBtn: () => {
    const action = deleteProduct();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
