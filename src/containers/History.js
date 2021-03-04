import { connect } from 'react-redux';
import History from 'src/components/History';

const mapStateToProps = (state) => ({
  history: state.app.data[0].history,
  historyImg: state.app.data[0].history_img,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
