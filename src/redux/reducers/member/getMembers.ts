import { GET_MEMBERS_FAILURE, GET_MEMBERS_REQUEST, GET_MEMBERS_RESET, GET_MEMBERS_SUCCESS } from "@/redux/constants/memberConstants";
import MemberType from "@/types/MemberType";

interface IGetMembersState {
  loading?: boolean;
  success?: boolean;
  error?: string;
  members?: MemberType[];
}

/**
 * @description Redux member reducer, to retrieve members of a specific ministry
 */
export default (state = {} as IGetMembersState, action: any) => {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return { loading: true };
    case GET_MEMBERS_SUCCESS:
      return { loading: false, success: true, members: action.payload };
    case GET_MEMBERS_FAILURE:
      return { loading: false, error: action.payload };
    case GET_MEMBERS_RESET:
      return {};
    default:
      return state;
  }
};
