import { connect } from 'react-redux';
import Products from 'src/components/Products';
import { fetchProducts } from 'src/actions/products';

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
