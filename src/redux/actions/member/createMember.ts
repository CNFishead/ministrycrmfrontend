import { CREATE_MEMBER_FAILURE, CREATE_MEMBER_REQUEST, CREATE_MEMBER_SUCCESS } from "@/redux/constants/memberConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";

export default (member: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: CREATE_MEMBER_REQUEST
    })
    console.log(member)
    const { data } = await axios.post(`/member`, member)
    dispatch({
      type: CREATE_MEMBER_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, CREATE_MEMBER_FAILURE, true);
  }
}