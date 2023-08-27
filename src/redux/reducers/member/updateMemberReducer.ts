import {
  UPDATE_MEMBER_REQUEST,
  UPDATE_MEMBER_SUCCESS,
  UPDATE_MEMBER_FAILURE,
  UPDATE_MEMBER_RESET,
} from "@/redux/constants/memberConstants";
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
    case UPDATE_MEMBER_REQUEST:
      return { loading: true };
    case UPDATE_MEMBER_SUCCESS:
      return { loading: false, success: true, member: action.payload };
    case UPDATE_MEMBER_FAILURE:
      return { loading: false, error: action.payload, success: false };
    case UPDATE_MEMBER_RESET:
      return {};
    default:
      return state;
  }
};
