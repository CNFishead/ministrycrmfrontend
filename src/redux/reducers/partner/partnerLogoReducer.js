import {
  GET_PARTNER_LOGO,
  UPDATE_PARTNER_LOGO,
} from '../../constants/partnerConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_PARTNER_LOGO:
      return { logo: action.payload };
    case UPDATE_PARTNER_LOGO:
      return { logo: action.payload };
    default:
      return state;
  }
};
