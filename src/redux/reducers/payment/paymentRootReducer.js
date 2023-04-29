import { combineReducers } from 'redux';
import paymentDetailsReducer from './paymentDetailsReducer';
import receiptDeleteReducer from './receiptDeleteReducer';
import receiptDetailsReducer from './receiptDetailsReducer';
import receiptListReducer from './receiptListReducer';
import receiptUpdateReducer from './receiptUpdateReducer';

export default combineReducers({
  paymentDetails: paymentDetailsReducer,
  receiptDetails: receiptDetailsReducer,
  receiptList: receiptListReducer,
  updateReceipt: receiptUpdateReducer,
  deleteReceipt: receiptDeleteReducer,
});
