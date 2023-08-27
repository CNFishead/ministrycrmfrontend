import { combineReducers } from "redux";
import createMemberReducer from "./createMemberReducer";
import getMembers from "./getMembers";
import getMemberReducer from "./getMemberReducer";
import updateMemberReducer from "./updateMemberReducer";

export default combineReducers({
  createMember: createMemberReducer,
  membersList: getMembers,
  memberDetails: getMemberReducer,
  memberUpdate: updateMemberReducer,
});
