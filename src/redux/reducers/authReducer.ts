import User from "@/types/User";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
} from "../constants/authConstants";

export interface AuthState {
  user?: User;
  loading?: boolean;
  error?: any;
}

export const authReducer = (
  state = {} as AuthState,
  action: any
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
    case USER_REGISTER_REQUEST:
    case USER_UPDATE_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case USER_LOGIN_FAIL:
    case USER_REGISTER_FAIL:
    case USER_UPDATE_FAILURE:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};

    case USER_UPDATE_SUCCESS:
      const updates = Object.keys(action.payload);
      // get the user from the state
      const updatedUser = { ...state.user as any };
      updates.forEach((update) => (updatedUser[update] = action.payload[update]));
      // console.log(updatedUser);

      return {
        ...state,
        user: updatedUser,
      };

    default:
      return state;
  }
};
