import { combineReducers } from "redux";
import selectedMinistryReducer from "./selectedMinistryReducer";
import updateMinistryReducer from "./updateMinistryReducer";

export default combineReducers({
  selectedMinistry: selectedMinistryReducer,
  ministryUpdate: updateMinistryReducer
});