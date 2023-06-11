import { combineReducers } from "redux";
import createMemberReducer from "./createMemberReducer";
import getMembers from "./getMembers";

export default combineReducers({
  createMember: createMemberReducer,
  membersList: getMembers,
});