import { GET_MEMBERS_FAILURE, GET_MEMBERS_REQUEST, GET_MEMBERS_SUCCESS } from "@/redux/constants/memberConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";

export default (options: {
    keyword?: string;
    // set page to default to 1 if not provided
    page?: number | 1;
    limit?: number | 10;
    filter?: string[] | [];
    ministryId?: string;
  }) =>
  async (dispatch: any) => {
    try {
      dispatch({
        type: GET_MEMBERS_REQUEST,
      });
      const { data } = await axios.get(
        `/member/${options.ministryId}?keyword=${options.keyword}&page=${options.page}&limit=${options.limit}&filter=${options.filter}`
      );
      dispatch({
        type: GET_MEMBERS_SUCCESS,
        payload: data.data,
      });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, GET_MEMBERS_FAILURE, true);
    }
  };
