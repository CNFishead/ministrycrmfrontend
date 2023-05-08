import User from '@/types/User';
import {
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_RESET,
  UPDATE_USER_SUCCESS,
} from '../../constants/userConstants';


export interface UpdateState {
  user?: User;
  loading?: boolean;
  error?: any;
}

export default (state = {} as UpdateState, action: any) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return { loading: true };
    case UPDATE_USER_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_USER_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_USER_RESET:
      return {};
    default:
      return state;
  }
};
