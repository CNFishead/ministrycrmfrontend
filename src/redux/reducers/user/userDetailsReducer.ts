import User from '@/types/User';
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_RESET, GET_USER_SUCCESS } from '../../constants/userConstants';

export interface IUserDetailsState {
  loading?: boolean;
  user?: User;
  error?: string;
}

export default (state = {} as IUserDetailsState, action: any) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, user: action.payload };
    case GET_USER_FAIL:
      return { loading: false, error: action.payload };
    case GET_USER_RESET:
      return {};
    default:
      return state;
  }
};
