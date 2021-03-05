import { connect } from 'react-redux';
import Connection from 'src/components/Connection';
import { userLogout } from 'src/actions/connection';

const mapStateToProps = (state) => ({
  userName: state.connection.userName,
  isLogged: state.connection.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogoutBtn: () => {
    const action = userLogout();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
