import { combineReducers } from 'redux';
import getVideosReducer from './getVideosReducer';
import videoUpdateReducer from './videoUpdateReducer';
import videoDetailsReducer from './videoDetailsReducer';
import {commentsReducer} from './comments/root';

export const videoRootReducer = combineReducers({
  // Add reducers here
  videoList: getVideosReducer,
  videoUpdate: videoUpdateReducer,
  videoDetails: videoDetailsReducer,
  comments: commentsReducer,
});
