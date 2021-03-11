import { connect } from 'react-redux';
import App from 'src/components/App';
import { fetchCategories } from 'src/actions/categories';
import { loginSuccess } from 'src/actions/user';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchCategories());
  },
  loginSuccess: (userData) => {
    dispatch(loginSuccess(userData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
