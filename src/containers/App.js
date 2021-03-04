import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchCategories } from 'src/actions/categories';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
