import Ministry from "@/types/Ministry";
import { MAIN_MINISTRY_FAIL, MAIN_MINISTRY_REQUEST, MAIN_MINISTRY_RESET, MAIN_MINISTRY_SUCCESS } from "../../constants/ministryConstants";

export interface ISelectedMinistryState {
  loading?: boolean;
  ministry?: Ministry;
  error?: string;
}


export default (state = {} as ISelectedMinistryState, action: any) => {
  switch (action.type) {
    case MAIN_MINISTRY_REQUEST:
      return { loading: true };
    case MAIN_MINISTRY_SUCCESS:
      return { loading: false, ministry: action.payload };
    case MAIN_MINISTRY_FAIL:
      return { loading: false, error: action.payload };
    case MAIN_MINISTRY_RESET:
      return {};
    default:
      return state;
  }
};
