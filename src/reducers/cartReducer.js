import {
  ADD_IN_CART,

} from 'src/actions/products';

import {

  ADD_QUANTITY_IN_CART,
  REDUCE_QUANTITY_IN_CART,
  CHANGE_QUANTITY_IN_CART,
} from 'src/actions/cart';

const initialState = {
  totalPriceInCart: 0,
  cart: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_IN_CART: {
      console.log('state.cart', state.cart);
      const productFound = state.cart.find((product) => product.title === action.title);
      console.log('productFound', productFound);
      if (productFound) {
        return {
          ...state,
          cart:
            state.cart.map((product) => {
              if (product.title === action.title) {
                return {
                  ...product,
                  quantity: product.quantity + action.quantity,
                  totalPrice: parseFloat((action.totalPrice + product.totalPrice).toFixed(2)),

                };
              }
              return product;
            }),
          totalPriceInCart: parseFloat((action.totalPrice + state.totalPriceInCart).toFixed(2)),

        };
      }
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
        totalPriceInCart: parseFloat((action.totalPrice + state.totalPriceInCart).toFixed(2)),
      };
    }

    case ADD_QUANTITY_IN_CART:
      return {
        ...state,
      };
    case REDUCE_QUANTITY_IN_CART:
      return {
        ...state,
      };
    case CHANGE_QUANTITY_IN_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
