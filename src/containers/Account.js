import { connect } from 'react-redux';
import Account from 'src/components/Account';
import {
  toggleFirstName,
  toggleLastName,
  togglePhone,
  toggleEmail,
  changeInfo,
  submitNewInfo,
} from 'src/actions/user';

const mapStateToProps = (state) => ({
  firstName: state.user.infos.firstName,
  lastName: state.user.infos.lastName,
  phoneNumber: state.user.infos.phoneNumber,
  email: state.user.email,
  logged: state.user.infos.logged,
  toggleFirstName: state.user.action.toggleFirstName,
  toggleLastName: state.user.action.toggleLastName,
  togglePhone: state.user.action.togglePhone,
  toggleEmail: state.user.action.toggleEmail,
  newFirstName: state.user.newInfos.firstName,
  newLastName: state.user.newInfos.lastName,
  newEmail: state.user.newInfos.email,
  newPhone: state.user.newInfos.phoneNumber,
  orderList: state.cartReducer.orderList,
});

const mapDispatchToProps = (dispatch) => ({
  onClickFirstName: () => {
    const action = toggleFirstName();
    dispatch(action);
  },
  onClickLastName: () => {
    const action = toggleLastName();
    dispatch(action);
  },
  onClickPhone: () => {
    const action = togglePhone();
    dispatch(action);
  },
  onClickEmail: () => {
    const action = toggleEmail();
    dispatch(action);
  },
  changeInfo: (value, fieldName) => {
    const action = changeInfo(value, fieldName);
    dispatch(action);
  },
  submitInfo: () => {
    const action = submitNewInfo();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
