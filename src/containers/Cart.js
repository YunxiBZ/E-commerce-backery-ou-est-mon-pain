import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import {
  addQuantityInCart,
  reduceQuantityInCart,
  changeQuantityInCart,
  deleteProductInCart,
  handleOrder,
  receptionDateChange,
} from 'src/actions/cart';

import { fetchOrderList } from 'src/actions/user';

const mapStateToProps = (state) => ({
  productsInCart: state.cartReducer.cart,
  totalPriceInCart: state.cartReducer.totalPriceInCart,
  token: state.user.infos.token,
  receptionDate: state.cartReducer.receptionDate,
  errorMessage: state.cartReducer.message,
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
    const action = deleteProductInCart(title, totalPrice);
    dispatch(action);
  },
  onClickCommandBtn: (productsInCart, totalPriceInCart, receptionDate) => {
    // console.log('je veux bien passer ma commande!!! ',
    // productsInCart, totalPriceInCart, receptionDate);
    const action = handleOrder(productsInCart, totalPriceInCart, receptionDate);
    dispatch(action);
  },
  fetchOrderList: (token) => {
    const action = fetchOrderList(token);
    dispatch(action);
  },
  onReceptionDateChange: (date) => {
    // console.log('onReceptionDateChange', date);
    const action = receptionDateChange(date);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
