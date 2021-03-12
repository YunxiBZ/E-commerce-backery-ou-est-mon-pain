import {
  SAVE_PRODUCTS,
  ADD_QUANTITY,
  REDUCE_QUANTITY,
  QUANTITY_CHANGE,
} from 'src/actions/products';

export const initialState = [];

const products = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return [
        ...action.products,
      ];
    case ADD_QUANTITY:
      return state.map((product) => {
        // si on a un produit dans le state qui est égal à celui contenu dans l'action
        // on renvoit le produit avec quantité +1
        if (product.title === action.product) {
          return {
            ...product,
            quantity: product.quantity + 1,
            totalPrice: parseFloat((product.price + product.totalPrice).toFixed(2)),
          };
        }
        return product;
      });
    case REDUCE_QUANTITY:
      return state.map((product) => {
        if (product.title === action.product) {
          // Ici si on a une quantité égal à 0 on arrête on renvoit juste le produit
          // sans decrement sa quantité
          if (product.quantity === 0) {
            return {
              ...product,
              quantity: product.quantity,
            };
          }
          return {
            ...product,
            quantity: product.quantity - 1,
            totalPrice: parseFloat((product.totalPrice - product.price).toFixed(2)),
          };
        }
        return product;
      });
    case QUANTITY_CHANGE:
      console.log(action);
      return state.map((product) => {
        if (product.title === action.product) {
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
      });

    default:
      return state;
  }
};

export default products;
