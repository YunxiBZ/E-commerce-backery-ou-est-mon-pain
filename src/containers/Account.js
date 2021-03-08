import { connect } from 'react-redux';
import Account from 'src/components/Account';

const mapStateToProps = (state) => ({
  firstName: state.user.infos.firstName,
  lastName: state.user.infos.lastName,
  phoneNumber: state.user.infos.phoneNumber,
  email: state.user.email,
  logged: state.user.infos.logged,
  toggleFirstName: state.user.action.toggleFirstName,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
