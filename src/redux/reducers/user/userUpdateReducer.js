import {
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
  UPDATE_USER_SUCCESS,
} from '../../constants/userConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { loading: true };
    case UPDATE_USER_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_USER_RESET:
      return {};
    default:
      return state;
  }
};
