import { UPDATE_MEMBER_FAILURE, UPDATE_MEMBER_REQUEST, UPDATE_MEMBER_SUCCESS } from "@/redux/constants/memberConstants";
import { RootState } from "@/redux/store";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";
import { setAlert } from "../alert";

/**
 * @description Redux action creator to update a member object
 */
export default (id: string, formData: any) => async (dispatch: Dispatch, getState: RootState) => {
  try {
    dispatch({
      type: UPDATE_MEMBER_REQUEST,
    });
    const { data } = await axios.put(`/member/${id}/update`, formData);
    dispatch({
      type: UPDATE_MEMBER_SUCCESS,
      payload: data.data,
    });
    dispatch(setAlert("Member updated successfully", "success") as any);
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, UPDATE_MEMBER_FAILURE, true);
  }
};
