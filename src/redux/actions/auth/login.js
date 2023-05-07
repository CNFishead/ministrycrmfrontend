import axios from "../../../utils/axios";
import { errorHandler } from "../../../utils/errorHandler";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../../constants/authConstants";
import { Dispatch } from "redux";

export default (loginData) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios({
      method: "POST",
      url: "/auth/login",
      data: loginData,
    });
    console.log(data);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem("user", JSON.stringify(data.user));
  } catch (error) {
    errorHandler(error, dispatch, USER_LOGIN_FAIL);
  }
};
