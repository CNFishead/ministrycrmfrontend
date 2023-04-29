const { combineReducers } = require('@reduxjs/toolkit');
import socketReducer from './socketReducer';
import socketConnectedUserReducer from './socketConnectedUserReducer';

export default combineReducers({
  // Add reducers here
  socket: socketReducer,
  connected: socketConnectedUserReducer,
});
