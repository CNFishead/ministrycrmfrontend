import { MINISTRY_UPDATE_FAIL, MINISTRY_UPDATE_REQUEST, MINISTRY_UPDATE_RESET, MINISTRY_UPDATE_SUCCESS } from "@/redux/constants/ministryConstants";

interface IState {
  loading: boolean;
  error: string;
  success: boolean;
}

export default (state = {} as IState, action: any) => {
  switch (action.type) {
    case MINISTRY_UPDATE_REQUEST:
      return { loading: true };
    case MINISTRY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case MINISTRY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MINISTRY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
}