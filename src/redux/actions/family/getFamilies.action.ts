import { GET_FAMILIES_FAILURE, GET_FAMILIES_REQUEST, GET_FAMILIES_SUCCESS } from "@/redux/constants/familyConstants";
import axios from "@/utils/axios";
import { errorHandler } from "@/utils/errorHandler";
import { Dispatch } from "redux";

export default (options: { keyword?: string; page?: number; limit?: number; filter?: string[];}) =>
  async (dispatch: Dispatch) => {
    try {
      dispatch({ type: GET_FAMILIES_REQUEST });
      const { data } = await axios.get(
        `/family?keyword=${options.keyword}&page=${options.page}&limit=${options.limit}&filter=${options.filter}`
      );
      console.log(data);
      dispatch({ type: GET_FAMILIES_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, GET_FAMILIES_FAILURE, true);
    }
  };
