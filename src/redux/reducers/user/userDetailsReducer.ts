import User from '@/types/User';
import { GET_USER_FAIL, GET_USER_REQUEST, GET_USER_RESET, GET_USER_SUCCESS } from '../../constants/userConstants';

interface UserDetailsState {
  loading?: boolean;
  user?: User;
  error?: any;
}

export default (state = {} as UserDetailsState, action: any) => {
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
