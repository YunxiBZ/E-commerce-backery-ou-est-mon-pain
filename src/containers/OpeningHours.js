import { connect } from 'react-redux';
import OpeningHours from 'src/components/OpeningHours';

const mapStateToProps = (state) => ({
  openingTime: state.app.data[0].opening_time,
  hotBread: state.app.data[0].hot_bread,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(OpeningHours);
