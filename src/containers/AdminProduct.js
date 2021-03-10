import { connect } from 'react-redux';
import AdminProduct from 'src/components/Admin/AdminProduct';
import {
  fetchProducts,
} from 'src/actions/products';
import {
  fetchCategories,
} from 'src/actions/categories';

const mapStateToProps = (state) => ({
  products: state.products,
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchProducts());
  },
  fetchCategories: () => {
    dispatch(fetchCategories);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
