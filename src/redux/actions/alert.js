import { v4 } from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "../constants/alertConstants";

export const setAlert =
  (message, alertType, timeout = 5) =>
  (dispatch) => {
    const id = v4();
    dispatch({
      type: SET_ALERT,
      payload: { message, alertType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout * 1000);
  };
