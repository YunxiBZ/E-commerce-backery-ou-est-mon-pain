import axios from 'axios';
import {
  HANDLE_ORDER, orderSuccess, orderFailed,
} from 'src/actions/cart';
import { FETCH_ORDER_LIST, fetchListSuccess, fetchListFailed } from 'src/actions/user';

const orderCart = (store) => (next) => async (action) => {
  const { token } = store.getState().user.infos;
  console.log('middlewares order token', token);
  const { cart, totalPriceInCart, receptionDate } = store.getState().cartReducer;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  console.log('cart', cart);
  switch (action.type) {
    case HANDLE_ORDER: {
      const date = receptionDate;
      try {
        const response = await axios.post(`${baseUrl}/order`, {
          reception_date: date,
          products: cart,
          total_price: totalPriceInCart,
        },
        config);
        console.log('order orderSuccess', response);
        store.dispatch(orderSuccess(response.date));
      }
      catch (error) {
        console.log('order orderError', error);

        store.dispatch(orderFailed(error.response.data.error));
      }

      break;
    }
    case FETCH_ORDER_LIST: {
      console.log('im FETCH_ORDER_LIST');

      try {
        const result = await axios.get(`${baseUrl}/client-orders`, config);
        console.log('im fetchListSuccess');

        store.dispatch(fetchListSuccess(result.data));
      }
      catch (error) {
        console.log('im fetchListFaild', error);

        store.dispatch(fetchListFailed(error.response.data.error));
      }

      break;
    }
    default:
      next(action);
  }
};

export default orderCart;
