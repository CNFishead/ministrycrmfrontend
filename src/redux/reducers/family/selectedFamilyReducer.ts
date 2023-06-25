import { GET_FAMILY_FAILURE, GET_FAMILY_REQUEST, GET_FAMILY_RESET, GET_FAMILY_SUCCESS } from "../../constants/familyConstants";

interface ISFamilyState {
  loading?: boolean;
  family?: any;
  error?: any;
}

export default (state = {} as ISFamilyState , action: any) => {
  switch (action.type) {
    case GET_FAMILY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_FAMILY_SUCCESS:
      return {
        ...state,
        loading: false,
        family: action.payload,
      };
    case GET_FAMILY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_FAMILY_RESET:
      return {};
    default:
      return state;
  }
};
