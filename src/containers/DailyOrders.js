import { connect } from 'react-redux';
import DailyOrders from 'src/components/Admin/AdminProduct/DailyOrders';
import {
  fetchDailyOrders,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
  orders: state.admin.dailyOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDailyOrders: () => {
    dispatch(fetchDailyOrders());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyOrders);
