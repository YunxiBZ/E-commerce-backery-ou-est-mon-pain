import axios from 'axios';
import { HANDLE_ORDER, orderSuccess, orderFailed } from 'src/actions/cart';

const orderCart = (store) => (next) => (action) => {
  const { token } = store.getState().user.infos;
  console.log('middlewares token', token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  switch (action.type) {
    case HANDLE_ORDER: {
      const { cart, totalPriceInCart } = store.getState().cartReducer;
      const baseUrl = process.env.REACT_APP_BASE_URL;
      const order = async () => {
        try {
          const response = await axios({
            url: `${baseUrl}/order`,
            method: 'post',
            data: {
              reception_date: '2021-03-09',
              products: cart,
              total_price: totalPriceInCart,
            },
            config,
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
      return next(action);
  }
};

export default orderCart;
