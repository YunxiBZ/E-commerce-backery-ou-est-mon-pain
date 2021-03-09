export const ADD_QUANTITY_IN_CART = 'ADD_QUANTITY_IN_CART';

export const REDUCE_QUANTITY_IN_CART = 'REDUCE_QUANTITY_IN_CART';

export const CHANGE_QUANTITY_IN_CART = 'CHANGE_QUANTITY_IN_CART';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const deleteProduct = (title, totalPrice) => ({
  type: DELETE_PRODUCT,
  title,
  totalPrice,
});

export const changeQuantityInCart = (title, quantity, price) => ({
  type: CHANGE_QUANTITY_IN_CART,
  title,
  quantity,
  price,
});

export const reduceQuantityInCart = (title, price) => ({
  type: REDUCE_QUANTITY_IN_CART,
  title,
  price,

});

export const addQuantityInCart = (title, price) => ({
  type: ADD_QUANTITY_IN_CART,
  title,
  price,
});
