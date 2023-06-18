import { combineReducers } from "redux";
import createFamilyReducer from "./createFamilyReducer";
import getFamiliesReducer from "./getFamiliesReducer";

export default combineReducers({
  // TODO: Add reducers here
  familyCreate: createFamilyReducer,
  listFamilies: getFamiliesReducer,
});
