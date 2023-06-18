import {
  CREATE_FAMILY_FAILURE,
  CREATE_FAMILY_REQUEST,
  CREATE_FAMILY_RESET,
  CREATE_FAMILY_SUCCESS,
} from "@/redux/constants/familyConstants";
import { AnyAction } from "redux";

interface FamilyReducerState {
  loading: boolean;
  error?: any;
  success: boolean;
}

export default (state = {} as FamilyReducerState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_FAMILY_REQUEST:
      return { ...state, loading: true };
    case CREATE_FAMILY_SUCCESS:
      return { ...state, loading: false, success: true };
    case CREATE_FAMILY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case CREATE_FAMILY_RESET:
      return { ...state, loading: false, error: undefined, success: false };
    default:
      return state;
  }
};
