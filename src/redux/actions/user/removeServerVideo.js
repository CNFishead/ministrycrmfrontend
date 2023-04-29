import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  SERVER_VIDEO_UPLOAD_FAIL,
  SERVER_VIDEO_UPLOAD_REQUEST,
  SERVER_VIDEO_UPLOAD_SUCCESS,
} from '../../constants/userConstants';
import { setAlert } from '../alert';

export default (id, name) => async (dispatch) => {
  try {
    if (
      confirm(
        'Are you sure you want to remove this video from the server? This action cannot be undone.'
      )
    ) {
      dispatch({ type: SERVER_VIDEO_UPLOAD_REQUEST });
      const { data } = await axios.delete(
        `/admin/server/userVideo/${id}/${name}`
      );
      dispatch({ type: SERVER_VIDEO_UPLOAD_SUCCESS, payload: data });
      dispatch(setAlert('Video removed from server', 'success'));
    }
  } catch (e) {
    errorHandler(e, dispatch, SERVER_VIDEO_UPLOAD_FAIL);
  }
};
