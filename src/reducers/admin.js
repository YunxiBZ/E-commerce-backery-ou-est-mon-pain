import {
  CHANGE_VALUE_PRODUCT,
  CHANGE_CATEGORIES_PRODUCT,
  CHANGE_PRODUCT_DROPDOWN,
  CREATE_PRODUCT,
  NEW_PRODUCT_SUCCESS,
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
  product: '11',
  addProductSuccess: '',
  deleteProductSuccess: '',
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
    case CHANGE_PRODUCT_DROPDOWN: {
      console.log(action);
      return {
        ...state,
        product: action.value,
      };
    }
    case CREATE_PRODUCT: {
      console.log(action);
      return {
        ...state,
        addProductSuccess: action.message,
        deleteProductSuccess: '',
      };
    }
    case NEW_PRODUCT_SUCCESS: {
      console.log(action);
      return {
        ...state,
        deleteProductSuccess: action.message,
        addProductSuccess: '',
      };
    }
    default:
      return state;
  }
};

export default admin;
