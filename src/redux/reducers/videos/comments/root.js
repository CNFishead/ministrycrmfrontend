// combine all video reducers into one root reducer
import { combineReducers } from "redux";
import getCommentsReducer from "./getCommentsReducer";

export const commentsReducer = combineReducers({
  commentList: getCommentsReducer,
});
