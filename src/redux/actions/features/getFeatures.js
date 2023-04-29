import axios from '../../../utils/axios';
import {
  SUBSCRIPTIONS_LIST_REQUEST,
  SUBSCRIPTIONS_LIST_SUCCESS,
} from '../../constants/subConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (keyword = '', pageNumber = 1, partnerid = '', limit = 10) =>
  async (dispatch) => {
    try {
      dispatch({ type: SUBSCRIPTIONS_LIST_REQUEST });
      const { data } = await axios.get(
        `/admin/features?keyword=${keyword}&pageNumber=${pageNumber}&partnerid=${partnerid}&limit=${limit}`
      );
      dispatch({ type: SUBSCRIPTIONS_LIST_SUCCESS, payload: data });
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
