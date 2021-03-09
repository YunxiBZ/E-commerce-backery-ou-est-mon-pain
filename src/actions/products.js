export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const REDUCE_QUANTITY = 'REDUCE_QUANTITY';
export const QUANTITY_CHANGE = 'QUANTITY_CHANGE';

export const ADD_IN_CART = 'ADD_IN_CART';

export const addInCart = (
  id,
  title,
  totalPrice,
  image,
  quantity,
) => ({
  type: ADD_IN_CART,
  id,
  title,
  totalPrice,
  image,
  quantity,
});

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});

export const quantityChange = (quantity, product) => ({
  type: QUANTITY_CHANGE,
  quantity,
  product,
});

export const reduceQuantity = (product) => ({
  type: REDUCE_QUANTITY,
  product,
});

export const addQuantity = (product) => ({
  type: ADD_QUANTITY,
  product,
});
