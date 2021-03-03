import { connect } from 'react-redux';
import Contact from 'src/components/Contact';

const mapStateToProps = (state) => ({
  adress: state.app.data[0].adress,
  phoneNumber: state.app.data[0].phone_number,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
