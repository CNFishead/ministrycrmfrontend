import { errorHandler } from '../../../utils/errorHandler';
import axios from '../../../utils/axios';
import { setAlert } from '../alert';
import {
  VIDEO_UPDATE_FAILURE,
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_SUCCESS,
} from '../../constants/videoContants';

/**
 * @description dispatches an action to create a livestream record in the database for the user
 * @param {string} id - the id of the user
 *
 * @author Austin Howard
 * @version 1.0
 * @since 1.0
 *
 */
export default (id) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO_UPDATE_REQUEST });
    const { data } = await axios.post('/admin/video/', { userId: id });
    dispatch({ type: VIDEO_UPDATE_SUCCESS, payload: data });
    dispatch(setAlert('Livestream created', 'success'));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, VIDEO_UPDATE_FAILURE);
  }
};
