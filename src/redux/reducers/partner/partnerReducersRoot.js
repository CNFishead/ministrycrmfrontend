import partnerDetailsReducer from './partnerDetailsReducer';
import partnerListReducer from './partnerListReducer';
import partnerUpdateReducer from './partnerUpdateReducer';
import selectedPartnerReducer from './selectedPartnerReducer';
import partnerLogoReducer from './partnerLogoReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  selectedPartner: partnerDetailsReducer,
  partnerList: partnerListReducer,
  partnerUpdate: partnerUpdateReducer,
  partnerDetails: partnerDetailsReducer,
  partnerLogo: partnerLogoReducer,
});
