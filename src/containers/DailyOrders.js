import { connect } from 'react-redux';
import DailyOrders from 'src/components/Admin/AdminProduct/DailyOrders';
import {
  fetchDailyOrders,
  validateOrder,
} from 'src/actions/admin';

const mapStateToProps = (state) => ({
  orders: state.admin.dailyOrders,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDailyOrders: () => {
    dispatch(fetchDailyOrders());
  },
  validateOrder: (orderId) => {
    dispatch(validateOrder(orderId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyOrders);
