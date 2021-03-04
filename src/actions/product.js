export const ADD_QUANTITY = 'ADD_QUANTITY';

export const REDUCE_QUANTITY = 'REDUCE_QUANTITY';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const QUANTITY_CHANGE = 'QUANTITY_CHANGE';

export const quantityChange = (payload) => ({
  type: QUANTITY_CHANGE,
  payload,
});

export const deleteProduct = () => ({
  type: DELETE_PRODUCT,

});

export const reduceQuantity = () => ({
  type: REDUCE_QUANTITY,

});

export const addQuantity = () => ({
  type: ADD_QUANTITY,

});
