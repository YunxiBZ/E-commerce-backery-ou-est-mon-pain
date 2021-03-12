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
  product: '',
  addProductSuccess: '',
  deleteProductSuccess: '',
  addProductError: '',
  deleteProductError: '',
  modifyProduct: {
    title: '',
    price: '',
    description: '',
    image: '',
    categories: {
      0: '',
      1: '',
    },
  },
};

const admin = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_PRODUCT: {
      console.log(action);
      return {
        ...state,
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
        ...state,
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
      const product = action.products.filter((item) => item.id === parseInt(action.value, 10));
      console.log(product);
      return {
        ...state,
        product: action.value,
        modifyProduct: {
          title: product[0].title,
          price: product[0].price.toString(),
          description: product[0].description,
          image: product[0].image,
          categories: {
            0: (product[0].categories[0] && (product[0].categories[0].id.toString())),
            1: (product[0].categories[1] && (product[0].categories[1].id.toString())),
          },
        },
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
