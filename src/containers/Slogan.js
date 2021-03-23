import { connect } from 'react-redux';
import Slogan from 'src/components/Slogan';

const mapStateToProps = (state) => ({
  slogan: state.app.data[0].slogan,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Slogan);
