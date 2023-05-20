import { combineReducers } from "redux";
import selectedMinistryReducer from "./selectedMinistryReducer";

export default combineReducers({
  selectedMinistry: selectedMinistryReducer
});