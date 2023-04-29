import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
} from '../../constants/videoContants';
/**
 * @description Get all watched videos of a user
 * @param {string} id
 *
 */
export default (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_VIDEOS_REQUEST,
    });
    const { data } = await axios.get(`/admin/user/${id}/watched`);
    dispatch({
      type: GET_VIDEOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    errorHandler(err, dispatch, GET_VIDEOS_FAILURE);
  }
};
