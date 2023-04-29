import axios from '../../../utils/axios';
import {
  GET_PAYMENT_DETAILS_REQUEST,
  GET_PAYMENT_DETAILS_SUCESSES,
} from '../../constants/payConstants';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../../constants/userConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { GET_VIDEOS_SUCCESS } from '../../constants/videoContants';

export default (id, dates) => async (dispatch, getState) => {
  try {
    // check the state to make sure that we're not loading, if we are, then don't do anything
    const {
      userList: { loading },
    } = getState().user;
    if (loading) return;
    // console.log(`getting reports for ${id}`);
    dispatch({ type: USER_LIST_REQUEST });
    dispatch({ type: GET_PAYMENT_DETAILS_REQUEST });
    const url = id
      ? `/partner/reports/${id}?startDate=${dates.startDate || ''}&endDate=${
          dates.endDate || ''
        }`
      : `/admin/reports/truthcasting?startDate=${
          dates.startDate || ''
        }&endDate=${dates.endDate || ''}`;
    const { data } = await axios.get(url);
    // console.log(data.data);
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: { users: data.data.signups },
    });
    dispatch({
      type: GET_PAYMENT_DETAILS_SUCESSES,
      payload: data.data.payments,
    });
    dispatch({
      type: GET_VIDEOS_SUCCESS,
      payload: { videos: data.data.videoReports },
    });
  } catch (err) {
    errorHandler(err, dispatch);
  }
};
