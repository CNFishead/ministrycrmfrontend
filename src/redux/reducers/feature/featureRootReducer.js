import { combineReducers } from 'redux';
import featureListReducer from './featureListReducer';
import featureReducer from './featureReducer';
import featureUpdateReducer from './featureUpdateReducer';
import selectedFeatureReducer from './selectedFeatureReducer';

export default combineReducers({
  // subscription reducers
  subs: featureListReducer,
  features: featureReducer,
  selectedFeature: selectedFeatureReducer,
  updateFeature: featureUpdateReducer,
});
