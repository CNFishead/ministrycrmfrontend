import { combineReducers } from "redux";
import createFamilyReducer from "./createFamilyReducer";
import getFamiliesReducer from "./getFamiliesReducer";
import selectedFamilyReducer from "./selectedFamilyReducer";
import updateFamilyReducer from "./updateFamilyReducer";

export default combineReducers({
  // TODO: Add reducers here
  familyCreate: createFamilyReducer,
  listFamilies: getFamiliesReducer,
  selectedFamily: selectedFamilyReducer,
  updateFamily: updateFamilyReducer,
});
