import axios from '../../../utils/axios';
import {
  CREATE_ALERT_FAILURE,
  CREATE_ALERT_REQUEST,
  CREATE_ALERT_SUCCESS,
} from '../../constants/alertConstants';
import { errorHandler } from '../../../utils/errorHandler';

/**
 *  @description      creates a new alert
 *  @param            {Object} alert - Alert object to be created
 *
 */
export default (alert) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ALERT_REQUEST,
    });
    const { data } = await axios.post(`/admin/alert`, alert);
    dispatch({
      type: CREATE_ALERT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(dispatch, error, CREATE_ALERT_FAILURE);
  }
};
