import { UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "@/redux/constants/userConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";
import { setAlert } from "../alert";

export default (formData: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({type: UPDATE_USER_REQUEST})
    const {data} = await axios.put('/user', formData);
    // console.log(data)
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data.user,
    });
    // set the new user in localstorage
    localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(setAlert('User updated successfully', 'success') as any);
  } catch (err) {
    console.log(err);
    errorHandler(err, dispatch, UPDATE_USER_FAIL)
  }
}