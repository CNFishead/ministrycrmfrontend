import {
  GET_PAYMENT_DETAILS_FAIL,
  GET_PAYMENT_DETAILS_REQUEST,
  GET_PAYMENT_DETAILS_RESET,
  GET_PAYMENT_DETAILS_SUCESSES,
} from '../../constants/payConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PAYMENT_DETAILS_REQUEST:
      return { loading: true };
    case GET_PAYMENT_DETAILS_SUCESSES:
      return { loading: false, details: action.payload };
    case GET_PAYMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case GET_PAYMENT_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
