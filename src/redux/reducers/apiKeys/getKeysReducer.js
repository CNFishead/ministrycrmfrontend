import {
  GET_KEYS_FAILURE,
  GET_KEYS_REQUEST,
  GET_KEYS_RESET,
  GET_KEYS_SUCCESS,
} from '../../constants/keysConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_KEYS_REQUEST:
      return { loading: true };
    case GET_KEYS_SUCCESS:
      return { loading: false, ...action.payload };
    case GET_KEYS_FAILURE:
      return { loading: false, error: action.payload };
    case GET_KEYS_RESET:
      return {};
    default:
      return state;
  }
};
