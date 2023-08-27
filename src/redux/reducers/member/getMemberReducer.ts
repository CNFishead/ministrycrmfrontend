import { GET_MEMBER_FAILURE, GET_MEMBER_REQUEST, GET_MEMBER_RESET, GET_MEMBER_SUCCESS } from "@/redux/constants/memberConstants";
import MemberType from "@/types/MemberType";

interface IGetMemberState {
  loading?: boolean;
  success?: boolean;
  error?: string;
  member?: MemberType;
}

/**
 * @description Redux member reducer, to retrieve members of a specific ministry
 */
export default (state = {} as IGetMemberState, action: any) => {
  switch (action.type) {
    case GET_MEMBER_REQUEST:
      return { loading: true };
    case GET_MEMBER_SUCCESS:
      return { loading: false, success: true, member: action.payload };
    case GET_MEMBER_FAILURE:
      return { loading: false, error: action.payload };
    case GET_MEMBER_RESET:
      return {};
    default:
      return state;
  }
};
