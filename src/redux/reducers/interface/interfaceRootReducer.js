import { combineReducers } from "@reduxjs/toolkit";
import { interfaceReducer } from "./interfaceReducer";
import { searchReducer } from "./searchReducer";
import connectedUsersReducer from "./connectedUsersReducer";

export default combineReducers({
  // Add reducers here
  interface: interfaceReducer,
  connectedUsers: connectedUsersReducer,
  search: searchReducer,
});
