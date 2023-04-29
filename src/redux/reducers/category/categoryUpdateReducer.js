import {
  CATEGORY_DELETE_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_UPDATE_FAIL,
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_RESET,
  CATEGORY_UPDATE_SUCCESS,
} from '../../constants/categoryConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DELETE_REQUEST:
    case CATEGORY_UPDATE_REQUEST:
      return { loading: true };
    case CATEGORY_DELETE_SUCCESS:
    case CATEGORY_UPDATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case CATEGORY_DELETE_FAIL:
    case CATEGORY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
