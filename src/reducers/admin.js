import {
  CHANGE_VALUE_PRODUCT,
  CHANGE_CATEGORIES_PRODUCT,
  CHANGE_PRODUCT_DROPDOWN,
  CREATE_PRODUCT,
  NEW_PRODUCT_SUCCESS,
  ERROR_ADD_PRODUCT,
  DELETE_PRODUCT_ERROR,
} from 'src/actions/admin';

const initialState = {
  newProduct: {
    title: '',
    price: '',
    description: '',
    image: '',
    categories: {
      0: '',
      1: '',
    },
  },
  product: '11',
  addProductSuccess: '',
  deleteProductSuccess: '',
  addProductError: '',
  deleteProductError: '',
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
        addProductError: '',
        deleteProductError: '',
      };
    }
    case NEW_PRODUCT_SUCCESS: {
      console.log(action);
      return {
        ...state,
        deleteProductSuccess: action.message,
        addProductSuccess: '',
        addProductError: '',
        deleteProductError: '',
      };
    }
    case ERROR_ADD_PRODUCT: {
      console.log(action);
      return {
        ...state,
        addProductError: action.message,
        addProductSuccess: '',
        deleteProductSuccess: '',
        deleteProductError: '',
      };
    }
    case DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        addProductError: '',
        addProductSuccess: '',
        deleteProductSuccess: '',
        deleteProductError: action.message,
      };
    }
    default:
      return state;
  }
};

export default admin;
