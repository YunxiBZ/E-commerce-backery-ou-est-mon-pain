import axios from 'axios';
import { FETCH_PRODUCTS, saveProducts } from 'src/actions/products';

const products = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      const fetchData = async () => {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/products`;
        try {
          const response = await axios.get(url);
          response.data.forEach((product) => {
            product.quantity = 0;
          });
          store.dispatch(saveProducts(response.data));
        }
        catch (error) {
          console.log(error, 'error');
        }
      };
      fetchData();
      break;
    }
    default:
      next(action);
  }
};

export default products;
