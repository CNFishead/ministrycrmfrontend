import {
  PARTNER_UPDATE_FAIL,
  PARTNER_UPDATE_REQUEST,
  PARTNER_UPDATE_RESET,
  PARTNER_UPDATE_SUCCESS,
} from '../../constants/partnerConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case PARTNER_UPDATE_REQUEST:
      return { loading: true };
    case PARTNER_UPDATE_SUCCESS:
      return { loading: false, success: true, partner: action.payload.partner };
    case PARTNER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PARTNER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
