import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "@/redux/constants/authConstants";
import { SELECT_MINISTRY_SUCCESS } from "@/redux/constants/ministryConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";

/**
 * @description - dispatches an action to authenticate the user by token
 */
export default (token: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post("/auth/me", { token });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    dispatch({ type: SELECT_MINISTRY_SUCCESS, payload: data.user.ministry });
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("ministry", JSON.stringify(data.user.ministry));
    // set the cookie
    document.cookie = `user=${JSON.stringify(data.user)}; path=/; max-age=${60 * 60 * 24 * 7}`;
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, USER_LOGIN_FAIL, true);
  }
};
