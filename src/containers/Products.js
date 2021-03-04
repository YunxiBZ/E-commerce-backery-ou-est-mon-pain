import { connect } from 'react-redux';
import Products from 'src/components/Products';
import {
  fetchProducts,
  addQuantity,
  reduceQuantity,
  quantityChange,
  deleteProduct,
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
