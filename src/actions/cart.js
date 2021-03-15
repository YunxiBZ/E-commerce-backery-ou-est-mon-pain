export const ADD_QUANTITY_IN_CART = 'ADD_QUANTITY_IN_CART';

export const REDUCE_QUANTITY_IN_CART = 'REDUCE_QUANTITY_IN_CART';

export const CHANGE_QUANTITY_IN_CART = 'CHANGE_QUANTITY_IN_CART';

export const DELETE_PRODUCT_IN_CART = 'DELETE_PRODUCT_IN_CART';

export const HANDLE_ORDER = 'HANDLE_ORDER';

export const ORDER_SUCCESS = 'ORDER_SUCCESS';

export const ORDER_FAILED = 'ORDER_FAILED';

export const RECEPTION_DATE_CHANGE = 'RECEPTION_DATE_CHANGE';

export const receptionDateChange = (date) => ({
  type: RECEPTION_DATE_CHANGE,
  date,
});

export const orderFailed = (message) => ({
  type: ORDER_FAILED,
  message,
});

export const orderSuccess = (cart, totalPriceInCart) => ({
  type: ORDER_SUCCESS,
  cart,
  totalPriceInCart,
});

export const handleOrder = (cart, totalPriceInCart, receptionDate) => ({
  type: HANDLE_ORDER,
  cart,
  totalPriceInCart,
  receptionDate,
});

export const deleteProductInCart = (title, totalPrice) => ({
  type: DELETE_PRODUCT_IN_CART,
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
