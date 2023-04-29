import {
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
  VIDEO_UPDATE_FAILURE,
} from '../../constants/videoContants';
import axios from '../../../utils/axios';
import { setAlert } from '../../actions/alert';
import { errorHandler } from '../../../utils/errorHandler';

export default (video) => async (dispatch) => {
  try {
    dispatch({
      type: VIDEO_UPDATE_REQUEST,
    });
    // console.log(video);
    const { data } = await axios.put(`/video/${video._id}`, video);
    dispatch({ type: VIDEO_UPDATE_SUCCESS, payload: data });
    dispatch(setAlert(data.message, 'success'));
  } catch (error) {
    errorHandler(error, dispatch, VIDEO_UPDATE_FAILURE);
  }
};
