import { connect } from 'react-redux';
import Header from 'src/components/Header';
import { toggleNavbar } from 'src/actions/app';

const mapStateToProps = (state) => ({
  toggle: state.app.toggle,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => {
    const action = toggleNavbar();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
