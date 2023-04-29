import {
  GET_RECEIPT_FAIL,
  GET_RECEIPT_REQUEST,
  GET_RECEIPT_RESET,
  GET_RECEIPT_SUCESSES,
} from '../../constants/payConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RECEIPT_REQUEST:
      return { loading: true };
    case GET_RECEIPT_SUCESSES:
      return { loading: false, receipt: action.payload };
    case GET_RECEIPT_FAIL:
      return { loading: false, error: action.payload };
    case GET_RECEIPT_RESET:
      return {};
    default:
      return state;
  }
};
