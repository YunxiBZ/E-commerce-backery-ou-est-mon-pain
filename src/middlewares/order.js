import axios from 'axios';
import { HANDLE_ORDER, orderSuccess, orderFailed } from 'src/actions/cart';

const orderCart = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_ORDER: {
      const { token } = store.getState().user.infos;
      console.log('middlewares token', token);
      const { cart, totalPriceInCart } = store.getState().cartReducer;
      const baseUrl = process.env.REACT_APP_BASE_URL;
      console.log('cart', cart);
      const order = async () => {
        try {
          const response = await axios.post(`${baseUrl}/order`, {
            reception_date: '2021-03-09',
            products: cart,
            total_price: totalPriceInCart,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log('order orderSuccess', response);
          store.dispatch(orderSuccess(response.date));
        }
        catch (error) {
          console.log('order orderError', error);

          store.dispatch(orderFailed(error.response.data.error));
        }
      };
      order();
      break;
    }
    default:
      next(action);
  }
};

export default orderCart;
