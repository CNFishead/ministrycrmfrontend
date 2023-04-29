import {
  SUBSCRIPTIONS_LIST_FAIL,
  SUBSCRIPTIONS_LIST_REQUEST,
  SUBSCRIPTIONS_LIST_SUCCESS,
} from '../../constants/subConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_LIST_REQUEST:
      return { loading: true };
    case SUBSCRIPTIONS_LIST_SUCCESS:
      return {
        loading: false,
        availableFeatures: action.payload.availableFeatures,
        allFeatures: action.payload.allFeatures,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case SUBSCRIPTIONS_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
