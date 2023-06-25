import {
  UPDATE_FAMILY_FAILURE,
  UPDATE_FAMILY_REQUEST,
  UPDATE_FAMILY_RESET,
  UPDATE_FAMILY_SUCCESS,
} from "@/redux/constants/familyConstants";
import FamilyType from "@/types/FamilyType";

interface IUpdateFamilyState {
  loading: boolean;
  success: boolean;
  error: any;
  family: FamilyType;
}

export default (state = {} as IUpdateFamilyState, action: any) => {
  switch (action.type) {
    case UPDATE_FAMILY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        family: action.payload,
      };
    case UPDATE_FAMILY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_FAMILY_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        error: null,
      };

    default:
      return state;
  }
};
