import { SAVE_PRODUCTS } from 'src/actions/products';

export const initialState = [];

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return [...action.products];
    default:
      return state;
  }
};

export default products;
