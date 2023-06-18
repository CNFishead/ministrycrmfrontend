import { GET_FAMILIES_FAILURE, GET_FAMILIES_REQUEST, GET_FAMILIES_RESET, GET_FAMILIES_SUCCESS } from "@/redux/constants/familyConstants";
import MemberType from "@/types/MemberType";

interface ListFamiliesState {
  loading?: boolean;
  families?: MemberType[];
  error?: any;
}

export default (state: ListFamiliesState = {}, action: any) => {
  switch (action.type) {
    case GET_FAMILIES_REQUEST:
      return { loading: true };
    case GET_FAMILIES_SUCCESS:
      return {
        loading: false,
        families: action.payload.families,
        pages: action.payload.pages,
        page: action.payload.page,
        nextPage: action.payload.nextPage,
        prevPage: action.payload.prevPage,
      };
    case GET_FAMILIES_FAILURE:
      return { loading: false, error: action.payload };
    case GET_FAMILIES_RESET:
      return {};
    default:
      return state;
  }
};
