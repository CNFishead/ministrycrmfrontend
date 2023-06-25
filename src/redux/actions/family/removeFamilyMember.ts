import { UPDATE_FAMILY_FAILURE, UPDATE_FAMILY_REQUEST, UPDATE_FAMILY_SUCCESS } from "@/redux/constants/familyConstants";
import axios from "@/utils/axios";
import { setAlert } from "../alert";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";

export default (id: string, memberId: string) => async (dispatch: Dispatch) => {
  try {
    console.log(`id: ${id}`);
    dispatch({ type: UPDATE_FAMILY_REQUEST });
    const { data } = await axios.put(`/family/${id}/removeMember/${memberId}`);
    dispatch({ type: UPDATE_FAMILY_SUCCESS, payload: data.family });
    dispatch(setAlert("Family member removed successfully", "success") as any);
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, UPDATE_FAMILY_FAILURE, true);
  }
};
