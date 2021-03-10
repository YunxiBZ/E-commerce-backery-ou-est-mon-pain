import { connect } from 'react-redux';
import AdminProduct from 'src/components/Admin/AdminProduct';
import {
  fetchProducts,
} from 'src/actions/products';

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
