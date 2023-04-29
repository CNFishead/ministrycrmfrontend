import userListReducer from './userListReducer';
import userDetailsReducer from './userDetailsReducer';
import userUpdateReducer from './userUpdateReducer';
import userServerUploadReducer from './userServerUploadReducer';
import { combineReducers } from '@reduxjs/toolkit';

export const userRootReducers = combineReducers({
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdate: userUpdateReducer,
  userVideoUpload: userServerUploadReducer,
});
