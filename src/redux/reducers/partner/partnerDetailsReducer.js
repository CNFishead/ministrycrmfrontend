import {
  PARTNER_LIST_ONE_FAIL,
  PARTNER_LIST_ONE_REQUEST,
  PARTNER_LIST_ONE_RESET,
  PARTNER_LIST_ONE_SUCCESS,
  PARTNER_UPDATE_RESET,
} from '../../constants/partnerConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case PARTNER_LIST_ONE_REQUEST:
      return { loading: true };
    case PARTNER_LIST_ONE_SUCCESS:
      return {
        loading: false,
        partner: action.payload,
      };
    case PARTNER_LIST_ONE_FAIL:
      return { loading: false, error: action.payload };
    case PARTNER_UPDATE_RESET:
    case PARTNER_LIST_ONE_RESET:
      return {};
    default:
      return state;
  }
};
