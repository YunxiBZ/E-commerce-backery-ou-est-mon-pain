import axios from 'axios';
import { FETCH_CATEGORIES, saveCategories } from 'src/actions/categories';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES: {
      const fetchData = async () => {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const url = `${baseUrl}/categories`;
        try {
          const response = await axios.get(url);
          store.dispatch(saveCategories(response.data));
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

export default categories;
