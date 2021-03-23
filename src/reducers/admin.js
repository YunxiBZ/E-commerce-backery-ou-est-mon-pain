import {
  CHANGE_VALUE_PRODUCT,
  CHANGE_CATEGORIES_PRODUCT,
  CHANGE_PRODUCT_DROPDOWN,
  CREATE_PRODUCT,
  NEW_PRODUCT_SUCCESS,
  ERROR_ADD_PRODUCT,
  DELETE_PRODUCT_ERROR,
  CHANGE_VALUE_PRODUCT_MODIFY,
  CHANGE_CATEGORIES_MODIFY_PRODUCT,
  MODIFY_PRODUCT,
  DELETE_MESSAGES,
  ERROR_MODIFY_PRODUCT,
  FETCH_DAILY_ORDERS_SUCCESS,
  VALIDATE_ORDER,
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
  modifyProductSuccess: '',
  modifyProductError: '',
  modifyProduct: {
    id: '',
    title: '',
    price: '',
    description: '',
    image: '',
    categories: {
      0: '',
      1: '',
    },
  },
  dailyOrders: [],
};

const admin = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_PRODUCT: {
      // console.log(action);
      return {
        ...state,
        newProduct: {
          ...state.newProduct,
          [action.name]: action.value,
        },
      };
    }
    case CHANGE_VALUE_PRODUCT_MODIFY: {
      // console.log(action);
      return {
        ...state,
        modifyProduct: {
          ...state.modifyProduct,
          [action.name]: action.value,
        },
      };
    }
    case CHANGE_CATEGORIES_PRODUCT: {
      // console.log(action);
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
    case CHANGE_CATEGORIES_MODIFY_PRODUCT: {
      // console.log(action);
      return {
        ...state,
        modifyProduct: {
          ...state.modifyProduct,
          categories: {
            ...state.modifyProduct.categories,
            [action.id]: action.value,
          },
        },
      };
    }
    case CHANGE_PRODUCT_DROPDOWN: {
      // console.log(action);
      const product = action.products.filter((item) => item.id === parseInt(action.value, 10));
      // console.log(product);
      return {
        ...state,
        product: action.value,
        modifyProduct: {
          id: product[0].id,
          title: product[0].title,
          price: product[0].price.toString(),
          description: product[0].description,
          image: product[0].image,
          categories: {
            0: (product[0].categories[0] ? (product[0].categories[0].id.toString()) : ''),
            1: (product[0].categories[1] ? (product[0].categories[1].id.toString()) : ''),
          },
        },
      };
    }
    case CREATE_PRODUCT: {
      // console.log(action);
      return {
        ...state,
        addProductSuccess: action.message,
        deleteProductSuccess: '',
        addProductError: '',
        deleteProductError: '',
        modifyProductSuccess: '',
        modifyProductError: '',
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
    case MODIFY_PRODUCT: {
      // console.log(action);
      return {
        ...state,
        product: '',
        modifyProductSuccess: action.message,
        modifyProductError: '',
        addProductSuccess: '',
        deleteProductSuccess: '',
        addProductError: '',
        deleteProductError: '',
        modifyProduct: {
          id: '',
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
      // console.log(action);
      return {
        ...state,
        deleteProductSuccess: action.message,
        addProductSuccess: '',
        addProductError: '',
        deleteProductError: '',
        modifyProductError: '',
        modifyProductSuccess: '',
      };
    }
    case ERROR_ADD_PRODUCT: {
      // console.log(action);
      return {
        ...state,
        addProductError: action.message,
        addProductSuccess: '',
        deleteProductSuccess: '',
        deleteProductError: '',
        modifyProductError: '',
        modifyProductSuccess: '',
      };
    }
    case DELETE_PRODUCT_ERROR: {
      return {
        ...state,
        addProductError: '',
        addProductSuccess: '',
        deleteProductSuccess: '',
        deleteProductError: action.message,
        modifyProductError: '',
        modifyProductSuccess: '',
      };
    }
    case DELETE_MESSAGES: {
      return {
        ...state,
        addProductSuccess: '',
        deleteProductSuccess: '',
        addProductError: '',
        deleteProductError: '',
        modifyProductSuccess: '',
        modifyProductError: '',
      };
    }
    case ERROR_MODIFY_PRODUCT: {
      return {
        ...state,
        addProductError: '',
        addProductSuccess: '',
        deleteProductSuccess: '',
        deleteProductError: '',
        modifyProductSuccess: '',
        modifyProductError: action.message,
      };
    }
    case FETCH_DAILY_ORDERS_SUCCESS: {
      // console.log(action);
      return {
        ...state,
        dailyOrders: action.orders,
      };
    }
    case VALIDATE_ORDER: {
      // On récupère la commande qui match l'orderId envoyé avec l'action
      const matchOrder = state.dailyOrders.filter((order) => order.id === action.orderId);
      // On récupère les autres commandes
      const otherOrders = state.dailyOrders.filter((order) => order.id !== action.orderId);
      // On change le statut de la commande qui match
      matchOrder[0].state = 'Validé';
      return {
        ...state,
        dailyOrders: [
          ...otherOrders,
          ...matchOrder,
        ],
      };
    }
    default:
      return state;
  }
};

export default admin;
