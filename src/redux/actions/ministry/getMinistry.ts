import { SELECT_MINISTRY_FAIL, SELECT_MINISTRY_REQUEST, SELECT_MINISTRY_SUCCESS } from "@/redux/constants/ministryConstants";
import { RootState } from "@/redux/store";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";

/**
 * @description - dispatches the action to retrieve information about a specific ministry
 */
export default (id: string) => async (dispatch: Dispatch, getState: RootState) => {
  try {
    dispatch({ type: SELECT_MINISTRY_REQUEST})
    const { data } = await axios.get(`/ministry/${id}`);
    dispatch({ type: SELECT_MINISTRY_SUCCESS, payload: data.ministry });
    // set the localStorage to the selected ministry
    localStorage.setItem('ministry', JSON.stringify(data.ministry));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, SELECT_MINISTRY_FAIL, false);
  }
};