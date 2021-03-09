import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import {
  addQuantityInCart,
  reduceQuantityInCart,
  changeQuantityInCart,
} from 'src/actions/cart';

const mapStateToProps = (state) => ({
  productsInCart: state.cartReducer.cart,
  totalPriceInCart: state.cartReducer.totalPriceInCart,
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddQuantityBtn: (product) => {
    const action = addQuantityInCart(product);
    dispatch(action);
  },
  onClickReduceQuantityBtn: (product) => {
    const action = reduceQuantityInCart(product);
    dispatch(action);
  },
  onChangeQuantityInput: (payload, title) => {
    const action = changeQuantityInCart(parseFloat(payload), title);
    dispatch(action);
  },
  onClickCommandBtn: () => {
    console.log('je veux bien passer ma commande!!! ');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
