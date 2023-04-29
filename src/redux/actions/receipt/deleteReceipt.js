import axios from '../../../utils/axios';
import {
  DELETE_RECEIPT_FAIL,
  DELETE_RECEIPT_REQUEST,
  DELETE_RECEIPT_SUCESSES,
} from '../../constants/payConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { setAlert } from '../alert';

/**
 * @description Delete receipt
 * @param {string} id
 * @returns {object} action
 */
export default (id, goBack) => async (dispatch) => {
  try {
    if (
      window.confirm(
        'Are you sure you want to delete this receipt? This action cannot be undone.'
      )
    ) {
      dispatch({ type: DELETE_RECEIPT_REQUEST });
      const { data } = await axios.delete(`/admin/receipt/${id}`);
      dispatch({ type: DELETE_RECEIPT_SUCESSES, payload: data });
      dispatch(setAlert('Receipt deleted', 'success'));
      if (goBack) {
        window.history.back();
      }
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, DELETE_RECEIPT_FAIL);
  }
};
