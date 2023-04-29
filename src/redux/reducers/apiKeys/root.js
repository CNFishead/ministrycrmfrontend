import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  // Add reducers here
  keyList: require('./getKeysReducer').default,
});
