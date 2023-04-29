import {
  DELETE_RECEIPT_FAIL,
  DELETE_RECEIPT_REQUEST,
  DELETE_RECEIPT_RESET,
  DELETE_RECEIPT_SUCESSES,
} from '../../constants/payConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case DELETE_RECEIPT_REQUEST:
      return { loading: true };
    case DELETE_RECEIPT_SUCESSES:
      return { loading: false, success: true };
    case DELETE_RECEIPT_FAIL:
      return { loading: false, error: action.payload };
    case DELETE_RECEIPT_RESET:
      return {};
    default:
      return state;
  }
};
