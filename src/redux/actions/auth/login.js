import { SELECT_MINISTRY_SUCCESS } from "@/redux/constants/ministryConstants";
import axios from "../../../utils/axios";
import { errorHandler } from "../../../utils/errorHandler";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../../constants/authConstants";

export default (loginData) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios({
      method: "POST",
      url: "/auth/login",
      data: loginData,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    dispatch({ type: SELECT_MINISTRY_SUCCESS, payload: data.user.ministry });
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("ministry", JSON.stringify(data.user.ministry));
    // set the cookie
    document.cookie = `user=${JSON.stringify(data.user)}; path=/; max-age=${60 * 60 * 24 * 7}`;
  } catch (error) {
    errorHandler(error, dispatch, USER_LOGIN_FAIL, true);
  }
};
