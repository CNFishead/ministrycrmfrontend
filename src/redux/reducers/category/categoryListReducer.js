import {
  CATEGORIES_LIST_FAIL,
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
  CLEAR_CATEGORIES,
} from '../../constants/categoryConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case CATEGORIES_LIST_REQUEST:
      return { loading: true };
    case CATEGORIES_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case CATEGORIES_LIST_FAIL:
    case CLEAR_CATEGORIES:
      return {};
    default:
      return state;
  }
};
