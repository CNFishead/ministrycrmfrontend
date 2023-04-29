import { combineReducers } from '@reduxjs/toolkit';
import { interfaceReducer } from './interfaceReducer';
import connectedUsersReducer from './connectedUsersReducer';

export default combineReducers({
  // Add reducers here
  interface: interfaceReducer,
  connectedUsers: connectedUsersReducer,
});
