import { connect } from 'react-redux';
import History from 'src/components/History';

const mapStateToProps = (state) => ({
  history1: state.app.data[0].history1,
  history2: state.app.data[0].history2,
  history3: state.app.data[0].history3,
  history4: state.app.data[0].history4,
  history5: state.app.data[0].history5,
  historyImg: state.app.data[0].history_img,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
