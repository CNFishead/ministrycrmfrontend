import {
  GET_RECEIPT_FAIL,
  GET_RECEIPT_REQUEST,
  GET_RECEIPT_SUCESSES,
} from '../../constants/payConstants';
import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';

export default (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_RECEIPT_REQUEST });
    const { data } = await axios.get(`/admin/receipt/${id}`);
    dispatch({
      type: GET_RECEIPT_SUCESSES,
      payload: data,
    });
  } catch (error) {
    errorHandler(error, dispatch, GET_RECEIPT_FAIL);
  }
};
