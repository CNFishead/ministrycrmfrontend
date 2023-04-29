import {
  GET_VIDEO_FAILURE,
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
} from '../../constants/videoContants';
import { errorHandler } from '../../../utils/errorHandler';
import axios from '../../../utils/axios';

export default (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_VIDEO_REQUEST });

    const { data } = await axios.get(`/admin/video/${id}`);
    dispatch({
      type: GET_VIDEO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, GET_VIDEO_FAILURE);
  }
};
