import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import {
  addQuantity,
  reduceQuantity,
  quantityChange,
} from 'src/actions/products';

const mapStateToProps = (state) => ({
  productsInCart: state.cartReducer.cart,
  totalPriceInCart: state.cartReducer.totalPriceInCart,
});

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
  onClickCommandBtn: () => {
    console.log('je veux bien passer ma commande!!! ');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
