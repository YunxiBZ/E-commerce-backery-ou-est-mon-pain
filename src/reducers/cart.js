import {
  ADD_IN_CART,
} from 'src/actions/products';

const initialState = {
  totalPriceInCart: 0,
  cart: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_IN_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.id,
            title: action.title,
            image: action.image,
            totalPrice: action.totalPrice,
            quantity: action.quantity,
          },
        ],
        totalPriceInCart: action.totalPrice,
      };
    default:
      return state;
  }
};

export default reducer;
