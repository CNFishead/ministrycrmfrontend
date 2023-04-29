//create an action to get the videos from the server
import axios from '../../../utils/axios';
import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_REQUEST,
  GET_SERVER_VIDEOS_SUCCESS,
} from '../../constants/videoContants';
import { errorHandler } from '../../../utils/errorHandler';

export default (userId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_VIDEOS_REQUEST,
    });
    const { data } = await axios.get('/admin/server/userVideos/' + userId);
    console.log(data);

    dispatch({ type: GET_SERVER_VIDEOS_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(error, dispatch, GET_VIDEOS_FAILURE);
  }
};
