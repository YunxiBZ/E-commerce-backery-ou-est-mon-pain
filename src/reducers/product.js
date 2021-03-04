// IMPORT DES ACTIONS
import {
  ADD_QUANTITY, REDUCE_QUANTITY, QUANTITY_CHANGE, DELETE_PRODUCT,
} from 'src/actions/product';

import imgBaguette from 'src/assets/image/baguette.jpg';

const initialState = {
  productName: 'baguette',
  productPrice: 1.1,
  productImg: imgBaguette,
  productQuantity: 1,
  priceBasic: 1.1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_QUANTITY: {
      return {
        ...state,
        productQuantity: state.productQuantity + 1,
        productPrice: parseFloat((state.productPrice + state.priceBasic).toFixed(2)),

      };
    }
    case REDUCE_QUANTITY: {
      return {
        ...state,
        productQuantity: state.productQuantity - 1,
        productPrice: parseFloat((state.productPrice - state.priceBasic).toFixed(2)),
      };
    }
    case QUANTITY_CHANGE: {
      return {
        ...state,
        productQuantity: action.payload,
        productPrice: parseFloat((state.priceBasic * action.payload).toFixed(2)),

      };
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        productQuantity: 0,
        productPrice: 0,

      };
    }
    default:
      return state;
  }
};

export default reducer;
