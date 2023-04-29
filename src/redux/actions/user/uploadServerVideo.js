import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  SERVER_VIDEO_UPLOAD_FAIL,
  SERVER_VIDEO_UPLOAD_REQUEST,
  SERVER_VIDEO_UPLOAD_SUCCESS,
} from '../../constants/userConstants';
import { setAlert } from '../alert';

export default ({ videoName, userId }) =>
  async (dispatch) => {
    try {
      if (
        confirm('Are you sure you want to upload this video to the uploader?')
      ) {
        dispatch({ type: SERVER_VIDEO_UPLOAD_REQUEST });
        const { data } = await axios.post(
          `${process.env.UPLOADER}/uploadFromServer`,
          {
            videoName,
            userId,
          }
        );
        dispatch({ type: SERVER_VIDEO_UPLOAD_SUCCESS, payload: data });
        dispatch(setAlert('Video has been queued for upload', 'success'));
      }
    } catch (e) {
      errorHandler(e, dispatch, SERVER_VIDEO_UPLOAD_FAIL);
    }
  };
