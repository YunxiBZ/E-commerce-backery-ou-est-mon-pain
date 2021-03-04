import {
  SAVE_PRODUCTS,
  ADD_QUANTITY,
  REDUCE_QUANTITY,
} from 'src/actions/products';

export const initialState = [];

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return [
        ...state,
        ...action.products,
      ];
    case ADD_QUANTITY:
      return state.map((product) => {
        if (product.title === action.product) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    case REDUCE_QUANTITY:
      return state.map((product) => {
        if (product.title === action.product) {
          if (product.quantity === 0) {
            return {
              ...product, quantity: product.quantity,
            };
          }
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    default:
      return state;
  }
};

export default products;
