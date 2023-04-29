import axios from '../../../utils/axios';
import {
  GET_RECEIPTS_FAIL,
  GET_RECEIPTS_REQUEST,
  GET_RECEIPTS_SUCESSES,
} from '../../constants/payConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (
    keyword = '',
    pageNumber = 1,
    sortBy = '',
    limit = 20,
    params
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_RECEIPTS_REQUEST });
      const { data } = await axios.get(
        `/admin/receipt?keyword=${keyword}&pageNumber=${pageNumber}&sortBy=${sortBy}&limit=${limit}&partner=${
          params && params.partner ? params.partner : ''
        }&type=${params && params.type ? params.type : ''}`
      );
      console.log(data);
      dispatch({
        type: GET_RECEIPTS_SUCESSES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, GET_RECEIPTS_FAIL);
    }
  };
