import { GET_USER_FAIL, GET_USER_SUCCESS } from "@/redux/constants/userConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";

export default () => async (dispatch: Dispatch) => {
  try {
    console.log(`firing action: getMe`)
    const {data} = await axios.get('/user/me');
    console.log(data)
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    errorHandler(err, dispatch, GET_USER_FAIL)
  }
}