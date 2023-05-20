import { MINISTRY_UPDATE_FAIL, MINISTRY_UPDATE_REQUEST, MINISTRY_UPDATE_SUCCESS, SELECT_MINISTRY_SUCCESS } from "@/redux/constants/ministryConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";
import { setAlert } from "../alert";

export default (id: string, form: any, updateSelectedMinistry: boolean = false) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: MINISTRY_UPDATE_REQUEST})
    const {data} = await axios.put(`/ministry/${id}`, form);
    dispatch({ type: MINISTRY_UPDATE_SUCCESS})
    // set the localStorage again, and then also dispatch the selected ministry action
    if(updateSelectedMinistry){
    localStorage.setItem('ministry', JSON.stringify(data.ministry));
    dispatch({ type: SELECT_MINISTRY_SUCCESS, payload: data.ministry})
    } 
    dispatch(setAlert(data.message, 'success') as any)
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, MINISTRY_UPDATE_FAIL, true)
  }
};