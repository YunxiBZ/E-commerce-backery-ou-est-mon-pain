import { connect } from 'react-redux';
import Categories from 'src/components/Categories';

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
