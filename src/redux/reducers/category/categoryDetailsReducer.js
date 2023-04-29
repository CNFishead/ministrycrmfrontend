import {
  CATEGORY_DETAILS_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_RESET,
  CATEGORY_DETAILS_SUCCESS,
} from '../../constants/categoryConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS_REQUEST:
      return { loading: true };
    case CATEGORY_DETAILS_SUCCESS:
      return {
        loading: false,
        category: action.payload,
        users: action.payload.users,
      };
    case CATEGORY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CATEGORY_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};
