import { combineReducers } from 'redux';
import { alertReducers } from './alertReducer';
import { authReducer } from './authReducer';
import interfaceRootReducers from './interface/interfaceRootReducer';
import paymentRootReducer from './payment/paymentRootReducer';
import { userRootReducers } from './user/root';
import featureRootReducer from './feature/featureRootReducer';
import socketRootReducer from './socket/socketRootReducer';
import categoryRootReducer from './category/categoryRootReducer';
import { videoRootReducer } from './videos/root';
import { dynamicReducer } from './dynamicReducer';
import partnerReducersRoot from './partner/partnerReducersRoot';

export const rootReducer = combineReducers({
  // Add reducers here
  alert: alertReducers,
  auth: authReducer,
  user: userRootReducers,
  keys: require('./apiKeys/root').default,
  partner: partnerReducersRoot,
  category: categoryRootReducer,
  interface: interfaceRootReducers,
  feature: featureRootReducer,
  pay: paymentRootReducer,
  socket: socketRootReducer,
  video: videoRootReducer,
  dynamic: dynamicReducer,
});
