import axios from '../../../utils/axios';
import {
  DELETE_ALERT_FAILURE,
  DELETE_ALERT_REQUEST,
  DELETE_ALERT_SUCCESS,
} from '../../constants/alertConstants';
import { errorHandler } from '../../../utils/errorHandler';

/**
 *  @description      creates a new alert
 *  @param            {ObjectId} id - id of Object to be deleted
 *
 */
export default (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ALERT_REQUEST,
    });
    const { data } = await axios.delete(`/admin/alert/${id}`);
    dispatch({
      type: DELETE_ALERT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(dispatch, error, DELETE_ALERT_FAILURE);
  }
};
