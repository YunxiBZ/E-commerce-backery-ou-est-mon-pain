import { connect } from 'react-redux';
import DailyOrders from 'src/components/Admin/AdminProduct/DailyOrders';
import {
  fetchDailyOrders,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchDailyOrders: () => {
    dispatch(fetchDailyOrders());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyOrders);
