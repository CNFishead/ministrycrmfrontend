import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
} from '../../constants/userConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { loading: true };
    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        pages: action.payload.pages,
        page: action.payload.page,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
        ...action.payload,
      };
    case USER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case USER_LIST_RESET:
      return {};
    default:
      return state;
  }
};
