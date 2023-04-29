import axios from '../../../utils/axios';
import {
  GET_ALERT_FAILURE,
  GET_ALERT_REQUEST,
  GET_ALERT_SUCCESS,
} from '../../../constants/alertConstants';
import { errorHandler } from '../../../utils/errorHandler';

/**
 *  @description      Retrieves all alerts from the server
 *  @param            {String} keyword - The keyword to search for
 *
 */
export default (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALERT_REQUEST,
    });
    const { data } = await axios.get(`/admin/alert/${id}`);
    dispatch({
      type: GET_ALERT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(dispatch, error, GET_ALERT_FAILURE);
  }
};
