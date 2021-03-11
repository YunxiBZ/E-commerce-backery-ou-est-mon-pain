export const CHANGE_VALUE_PRODUCT = 'CHANGE_VALUE_PRODUCT';
export const SUBMIT_NEW_PRODUCT = 'SUBMIT_NEW_PRODUCT';
export const CHANGE_CATEGORIES_PRODUCT = 'CHANGE_CATEGORIES_PRODUCT';
export const CHANGE_PRODUCT_DROPDOWN = 'CHANGE_PRODUCT_DROPDOWN';

export const changeValueProduct = (value, name) => ({
  type: CHANGE_VALUE_PRODUCT,
  value,
  name,
});

export const changeCategoriesProduct = (value, id) => ({
  type: CHANGE_CATEGORIES_PRODUCT,
  value,
  id,
});

export const changeProductDropdown = (value) => ({
  type: CHANGE_PRODUCT_DROPDOWN,
  value,
});

export const submitNewProduct = () => ({
  type: SUBMIT_NEW_PRODUCT,
});
