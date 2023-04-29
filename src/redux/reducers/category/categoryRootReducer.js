import { combineReducers } from '@reduxjs/toolkit';
import categoryCreateReducer from './categoryCreateReducer';
import categoryDetailsReducer from './categoryDetailsReducer';
import categoryListReducer from './categoryListReducer';
import categoryUpdateReducer from './categoryUpdateReducer';

export default combineReducers({
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryCreate: categoryCreateReducer,
});
