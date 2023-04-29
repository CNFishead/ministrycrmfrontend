import {
  GET_RECEIPTS_FAIL,
  GET_RECEIPTS_REQUEST,
  GET_RECEIPTS_RESET,
  GET_RECEIPTS_SUCESSES,
} from '../../constants/payConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RECEIPTS_REQUEST:
      return { loading: true };
    case GET_RECEIPTS_SUCESSES:
      return {
        loading: false,
        receipts: action.payload.receipts,
        pages: action.payload.pages,
        page: action.payload.page,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      };
    case GET_RECEIPTS_FAIL:
      return { loading: false, error: action.payload };
    case GET_RECEIPTS_RESET:
      return {};
    default:
      return state;
  }
};
