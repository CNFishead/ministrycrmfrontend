import { GET_MEMBER_FAILURE, GET_MEMBER_REQUEST, GET_MEMBER_SUCCESS } from "@/redux/constants/memberConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { get } from "http";

export default (id: string) => async (dispatch: any, getState: any) => {
  try {
    // check if we are already fetching members
    if (getState().member.memberDetails.loading) return;
    dispatch({
      type: GET_MEMBER_REQUEST,
    });
    const { data } = await axios.get(`/member/details/${id}`);
    dispatch({
      type: GET_MEMBER_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, GET_MEMBER_FAILURE, true);
  }
};
