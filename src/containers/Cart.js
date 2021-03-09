import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import {
  addQuantityInCart,
  reduceQuantityInCart,
  changeQuantityInCart,
  deleteProduct,
} from 'src/actions/cart';

const mapStateToProps = (state) => ({
  productsInCart: state.cartReducer.cart,
  totalPriceInCart: state.cartReducer.totalPriceInCart,
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddQuantityBtn: (title, price) => {
    const action = addQuantityInCart(title, price);
    dispatch(action);
  },
  onClickReduceQuantityBtn: (title, price) => {
    const action = reduceQuantityInCart(title, price);
    dispatch(action);
  },
  onChangeQuantityInput: (title, quantity, price) => {
    const action = changeQuantityInCart(title, parseFloat(quantity), price);
    dispatch(action);
  },
  onClickDeleteBtn: (title, totalPrice) => {
    const action = deleteProduct(title, totalPrice);
    dispatch(action);
  },
  onClickCommandBtn: () => {
    console.log('je veux bien passer ma commande!!! ');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
