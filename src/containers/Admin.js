import { connect } from 'react-redux';
import Admin from 'src/components/Admin';

const mapStateToProps = (state) => ({
  role: state.user.infos.role,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
