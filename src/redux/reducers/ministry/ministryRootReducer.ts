import { combineReducers } from "redux";
import selectedMinistryReducer from "./selectedMinistryReducer";
import updateMinistryReducer from "./updateMinistryReducer";
import mainMinistryReducer from "./mainMinistryReducer";

export default combineReducers({
  selectedMinistry: selectedMinistryReducer,
  ministryUpdate: updateMinistryReducer,
  mainMinistry: mainMinistryReducer,
});