import {
  ADD_IN_CART,

} from 'src/actions/products';

import {

  ADD_QUANTITY_IN_CART,
  REDUCE_QUANTITY_IN_CART,
  CHANGE_QUANTITY_IN_CART,
  DELETE_PRODUCT,
} from 'src/actions/cart';

const initialState = {
  totalPriceInCart: 0,
  cart: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_IN_CART: {
      // Find the product need to change quantity
      const productFound = state.cart.find((product) => product.title === action.title);
      // If the product has been in cart, we just change the quantity with price
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
      // If the product is'n yet to be in cart, we add it in cart with price
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.id,
            title: action.title,
            image: action.image,
            price: action.price,
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
        cart:
          state.cart.map((product) => {
            // Find the product with title, change his quantity, then map all of products
            if (product.title === action.title) {
              return {
                ...product,
                quantity: product.quantity + 1,
                totalPrice: parseFloat((product.price + product.totalPrice).toFixed(2)),

              };
            }
            return product;
          }),
        totalPriceInCart: parseFloat((action.price + state.totalPriceInCart).toFixed(2)),

      };

    case REDUCE_QUANTITY_IN_CART:
      return {
        ...state,
        cart:
        // Find the product with title, change his quantity, then map all of products
          state.cart.map((product) => {
            if (product.title === action.title) {
              return {
                ...product,
                quantity: product.quantity - 1,
                totalPrice: parseFloat((product.totalPrice - product.price).toFixed(2)),

              };
            }
            return product;
          }),
        totalPriceInCart: parseFloat((state.totalPriceInCart - action.price).toFixed(2)),

      };
    case CHANGE_QUANTITY_IN_CART: {
      // Calculate the difference price between new and old quantity
      const productFound = state.cart.find((product) => product.title === action.title);
      const oldTotalPrice = productFound.quantity * productFound.price;
      let newTotalPrice;
      if (Number.isNaN(action.quantity)) {
        newTotalPrice = 0;
      }
      newTotalPrice = action.quantity * productFound.price;

      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.title === action.title) {
            if (Number.isNaN(action.quantity)) {
              return {
                ...product,
                quantity: 0,
                totalPrice: 0,
              };
            }
            return {
              ...product,
              quantity: action.quantity,
              totalPrice: parseFloat((action.quantity * product.price).toFixed(2)),
            };
          }
          return product;
        }),
        totalPriceInCart: parseFloat((
          state.totalPriceInCart - oldTotalPrice + newTotalPrice
        ).toFixed(2)),

      };
    }
    case DELETE_PRODUCT:
      console.log('delete product');
      return {
        ...state,

      };
    default:
      return state;
  }
};

export default reducer;
