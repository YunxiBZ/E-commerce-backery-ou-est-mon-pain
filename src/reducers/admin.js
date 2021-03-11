import {
  CHANGE_VALUE_PRODUCT,
  CHANGE_CATEGORIES_PRODUCT,
} from 'src/actions/admin';

const initialState = {
  newProduct: {
    title: '',
    price: '',
    description: '',
    image: '',
    categories: {
      0: 1,
      1: 1,
    },
  },
};

const admin = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_PRODUCT: {
      console.log(action);
      return {
        newProduct: {
          ...state.newProduct,
          [action.name]: action.value,
        },
      };
    }
    case CHANGE_CATEGORIES_PRODUCT: {
      console.log(action);
      const categoryId = parseInt(action.value, 10);
      return {
        newProduct: {
          ...state.newProduct,
          categories: {
            ...state.newProduct.categories,
            [action.id]: categoryId,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default admin;
