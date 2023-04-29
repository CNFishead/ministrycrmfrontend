import axios from '../../../utils/axios';
import {
  UPDATE_ALERT_FAILURE,
  UPDATE_ALERT_REQUEST,
  UPDATE_ALERT_SUCCESS,
} from '../../constants/alertConstants';
import { errorHandler } from '../../../utils/errorHandler';

/**
 *  @description      Updates an already created alert
 *  @param            {Object} alert - Alert object to be updated
 *
 */
export default (alert) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ALERT_REQUEST,
    });
    const { data } = await axios.put(`/admin/alert/${alert._id}`, alert);
    dispatch({
      type: UPDATE_ALERT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(dispatch, error, UPDATE_ALERT_FAILURE);
  }
};
