import axios from '../../../utils/axios';
import {
  PARTNER_LIST_FAIL,
  PARTNER_LIST_REQUEST,
  PARTNER_LIST_SUCCESS,
} from '../../constants/partnerConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (keyword = '', pageNumber = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: PARTNER_LIST_REQUEST });
      const { data } = await axios.get(
        `/partner?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({ type: PARTNER_LIST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, PARTNER_LIST_FAIL);
    }
  };
