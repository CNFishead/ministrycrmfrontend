import { Dispatch } from "redux";
import { setAlert } from "../redux/actions/alert";
import logout from "../redux/actions/auth/logout";

/**
 * @description - This function is used to handle errors in the client application.
 *
 * @param {Error} error - The error object
 * @param {Utility} dispatch - The dispatch function
 * @param {String} constant - The constant to be used in the reducer
 * @Author - Austin Howard
 * @lastModified - 2022-07-22
 * @modifiedBy - Austin Howard
 * @version - 1.0.0
 */
export const errorHandler = (error: any, dispatch: Dispatch, constant?: any) => {
  const message =
    error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : error.message
      ? error.message
      : "Something went wrong";
  if (message === "Not authorized, token failed") {
    dispatch(logout() as any);
  }
  if (constant) {
    dispatch({
      type: constant,
      payload: message,
    });
  }
  dispatch(setAlert(message, "error") as any);
};
