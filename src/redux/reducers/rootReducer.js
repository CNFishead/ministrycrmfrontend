import { combineReducers } from "redux";
import { alertReducers } from "./alertReducer";
import { authReducer } from "./authReducer";
import interfaceRootReducers from "./interface/interfaceRootReducer";
import paymentRootReducer from "./payment/paymentRootReducer";
import { userRootReducers } from "./user/root";
import featureRootReducer from "./feature/featureRootReducer";
import socketRootReducer from "./socket/socketRootReducer";
import { dynamicReducer } from "./dynamicReducer";
import ministryRootReducer from "./ministry/ministryRootReducer";

export const rootReducer = combineReducers({
  // Add reducers here
  alert: alertReducers,
  auth: authReducer,
  user: userRootReducers,
  interface: interfaceRootReducers,
  feature: featureRootReducer,
  pay: paymentRootReducer,
  ministry: ministryRootReducer,
  socket: socketRootReducer,
  dynamic: dynamicReducer,
});
