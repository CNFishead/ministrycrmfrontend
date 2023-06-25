import { GET_FAMILY_FAILURE, GET_FAMILY_REQUEST, GET_FAMILY_SUCCESS } from "@/redux/constants/familyConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";

/**
 * @description dispatches an action to get a single family from the database
 */
export default (id: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_FAMILY_REQUEST,
    });
    const { data } = await axios.get(`/family/${id}`);
    dispatch({
      type: GET_FAMILY_SUCCESS,
      payload: data.family,
    });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, GET_FAMILY_FAILURE, true);
  }
};
