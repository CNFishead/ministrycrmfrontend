import {
  PARTNER_LIST_FAIL,
  PARTNER_LIST_REQUEST,
  PARTNER_LIST_RESET,
  PARTNER_LIST_SUCCESS,
} from '../../constants/partnerConstants';

export default (state = { partners: [] }, action) => {
  switch (action.type) {
    case PARTNER_LIST_REQUEST:
      return { loading: true };
    case PARTNER_LIST_SUCCESS:
      return {
        loading: false,
        partners: action.payload.partners,
        pages: action.payload.pages,
        page: action.payload.page,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      };
    case PARTNER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PARTNER_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};
