import { connect } from 'react-redux';
import AdminProduct from 'src/components/Admin/AdminProduct';
import {
  fetchProducts,
} from 'src/actions/products';
import {
  fetchCategories,
} from 'src/actions/categories';
import {
  changeValueProduct,
  changeCategoriesProduct,
  submitNewProduct,
  changeProductDropdown,
  deleteProduct,
  changeValueProductModify,
  changeCategoriesProductModify,
  submitModifiedProduct,
  deleteMessages,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
  productName: state.admin.newProduct.title,
  productPrice: state.admin.newProduct.price,
  productDescription: state.admin.newProduct.description,
  productCategories: state.admin.newProduct.categories,
  productImage: state.admin.newProduct.image,
  successAddProduct: state.admin.addProductSuccess,
  successDeleteProduct: state.admin.deleteProductSuccess,
  addProductError: state.admin.addProductError,
  deleteProductError: state.admin.deleteProductError,
  productSelected: state.admin.product,
  selectedProductTitle: state.admin.modifyProduct.title,
  selectedProductPrice: state.admin.modifyProduct.price,
  selectedProductDescription: state.admin.modifyProduct.description,
  selectedProductImage: state.admin.modifyProduct.image,
  selectedProductCategory1: state.admin.modifyProduct.categories[0],
  selectedProductCategory2: state.admin.modifyProduct.categories[1],
  successModifyProduct: state.admin.modifyProductSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchProducts());
  },
  fetchCategories: () => {
    dispatch(fetchCategories);
  },
  changeField: (value, name) => {
    const action = changeValueProduct(value, name);
    dispatch(action);
  },
  changeCategories: (value, id) => {
    dispatch(changeCategoriesProduct(value, id));
  },
  changeModifyProductCategories: (value, id) => {
    dispatch(changeCategoriesProductModify(value, id));
  },
  submitNewProduct: () => {
    dispatch(submitNewProduct());
  },
  submitModifiedProduct: () => {
    dispatch(submitModifiedProduct());
  },
  changeProduct: (value, products) => {
    dispatch(changeProductDropdown(value, products));
  },
  deleteProduct: () => {
    dispatch(deleteProduct());
  },
  changeFieldModifyProduct: (value, name) => {
    const action = changeValueProductModify(value, name);
    dispatch(action);
  },
  deleteMessages: () => {
    dispatch(deleteMessages());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
