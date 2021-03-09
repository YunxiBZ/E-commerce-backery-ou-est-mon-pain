export const ADD_QUANTITY_IN_CART = 'ADD_QUANTITY_IN_CART';

export const REDUCE_QUANTITY_IN_CART = 'REDUCE_QUANTITY_IN_CART';

export const CHANGE_QUANTITY_IN_CART = 'CHANGE_QUANTITY_IN_CART';

export const changeQuantityInCart = () => ({
  type: CHANGE_QUANTITY_IN_CART,

});

export const reduceQuantityInCart = () => ({
  type: REDUCE_QUANTITY_IN_CART,

});

export const addQuantityInCart = () => ({
  type: ADD_QUANTITY_IN_CART,

});
