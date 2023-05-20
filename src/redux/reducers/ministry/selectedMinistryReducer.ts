import Ministry from "@/types/Ministry";
import { SELECT_MINISTRY_FAIL, SELECT_MINISTRY_REQUEST, SELECT_MINISTRY_RESET, SELECT_MINISTRY_SUCCESS } from "../../constants/ministryConstants";

export interface ISelectedMinistryState {
  loading?: boolean;
  ministry?: Ministry;
  error?: string;
}


export default (state = {} as ISelectedMinistryState, action: any) => {
  switch (action.type) {
    case SELECT_MINISTRY_REQUEST:
      return { loading: true };
    case SELECT_MINISTRY_SUCCESS:
      return { loading: false, ministry: action.payload };
    case SELECT_MINISTRY_FAIL:
      return { loading: false, error: action.payload };
    case SELECT_MINISTRY_RESET:
      return {};
    default:
      return state;
  }
};
