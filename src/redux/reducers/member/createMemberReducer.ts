import { CREATE_MEMBER_FAILURE, CREATE_MEMBER_REQUEST, CREATE_MEMBER_RESET, CREATE_MEMBER_SUCCESS } from "@/redux/constants/memberConstants";

export interface ICreateMemberState {
  loading: boolean;
  success: boolean;
  error?: string;
}


export default (state = {} as ICreateMemberState, action: any) => {
  switch (action.type) {
    case CREATE_MEMBER_REQUEST:
      return { loading: true };
    case CREATE_MEMBER_SUCCESS:
      return { loading: false, success: true };
    case CREATE_MEMBER_FAILURE:
      return { loading: false, error: action.payload };
    case CREATE_MEMBER_RESET:
      return {};
    default:
      return state;
  }
};
