import axios from '../../../utils/axios';
import {
  UPDATE_RECEIPT_FAIL,
  UPDATE_RECEIPT_REQUEST,
  UPDATE_RECEIPT_SUCESSES,
} from '../../constants/payConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { setAlert } from '../alert';

export default (receipt) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_RECEIPT_REQUEST });
    const { data } = await axios.put(`/admin/receipt/${receipt._id}`, receipt);
    dispatch({ type: UPDATE_RECEIPT_SUCESSES, payload: data });
    dispatch(setAlert('Updated receipt successfully', 'success'));
    // go back
    setTimeout(() => {
      window.history.back();
    }, 1000);
  } catch (error) {
    errorHandler(error, dispatch, UPDATE_RECEIPT_FAIL);
  }
};
