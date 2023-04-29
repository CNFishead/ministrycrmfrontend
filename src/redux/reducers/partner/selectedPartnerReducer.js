import { PARTNER_SELECT } from '../../constants/partnerConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case PARTNER_SELECT:
      return { ...state, partner: action.payload };
    default:
      return state;
  }
};
