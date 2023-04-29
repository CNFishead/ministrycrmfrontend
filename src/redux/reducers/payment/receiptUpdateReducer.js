import {
  UPDATE_RECEIPT_FAIL,
  UPDATE_RECEIPT_REQUEST,
  UPDATE_RECEIPT_RESET,
  UPDATE_RECEIPT_SUCESSES,
} from '../../constants/payConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_RECEIPT_REQUEST:
      return { loading: true };
    case UPDATE_RECEIPT_SUCESSES:
      return { loading: false, success: true, receipt: action.payload.receipt };
    case UPDATE_RECEIPT_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_RECEIPT_RESET:
      return {};
    default:
      return state;
  }
};
