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
  submitNewProduct: () => {
    dispatch(submitNewProduct());
  },
  changeProduct: (value) => {
    dispatch(changeProductDropdown(value));
  },
  deleteProduct: () => {
    dispatch(deleteProduct());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
