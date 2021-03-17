import axios from 'axios';
import {
  HANDLE_ORDER, orderSuccess, orderFailed, emptyBasket,
} from 'src/actions/cart';
import { FETCH_ORDER_LIST, fetchListSuccess, fetchListFailed } from 'src/actions/user';

const orderCart = (store) => (next) => async (action) => {
  const { token } = store.getState().user.infos;
  const { cart, totalPriceInCart, receptionDate } = store.getState().cartReducer;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
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
        store.dispatch(orderSuccess(response.date));
        store.dispatch(emptyBasket());
      }
      catch (error) {
        store.dispatch(orderFailed(error.response.data.error));
      }

      break;
    }
    case FETCH_ORDER_LIST: {
      try {
        const result = await axios.get(`${baseUrl}/client-orders`, config);

        store.dispatch(fetchListSuccess(result.data));
      }
      catch (error) {
        store.dispatch(fetchListFailed(error.response.data.error));
      }

      break;
    }
    default:
      next(action);
  }
};

export default orderCart;
