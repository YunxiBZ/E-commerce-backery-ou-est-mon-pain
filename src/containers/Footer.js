import { connect } from 'react-redux';
import Footer from 'src/components/Footer';
import { toggleFooterlist } from 'src/actions/app';

const mapStateToProps = (state) => ({
  toggleFooterClassname: state.app.toggleFooterlist,
});

const mapDispatchToProps = (dispatch) => ({
  onClickToggleFooterList: () => {
    const action = toggleFooterlist();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
