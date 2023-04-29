import axios from '../../../utils/axios';
import {
  GET_RECEIPT_SUCESSES,
  UPDATE_RECEIPT_FAIL,
  UPDATE_RECEIPT_REQUEST,
  UPDATE_RECEIPT_SUCESSES,
} from '../../constants/payConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_RECEIPT_REQUEST,
    });
    const { data } = await axios.put(`/admin/receipt/${id}/refund`);
    dispatch({ type: UPDATE_RECEIPT_SUCESSES, payload: data });
    dispatch({ type: GET_RECEIPT_SUCESSES, payload: data.receipt });
    dispatch(setAlert(data.message, 'success'));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, UPDATE_RECEIPT_FAIL);
  }
};
