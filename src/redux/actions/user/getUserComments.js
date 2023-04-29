import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  ADD_VIDEO_COMMENT_FAILURE,
  GET_VIDEO_COMMENTS_REQUEST,
  GET_VIDEO_COMMENTS_SUCCESS,
} from '../../constants/videoContants';

export default (id, page = 1, previousComments = []) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_VIDEO_COMMENTS_REQUEST });
      const { data } = await axios.get(
        `/admin/user/${id}/comments?page=${page}`
      );
      data.comments = [...previousComments, ...data.comments];
      dispatch({ type: GET_VIDEO_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      errorHandler(error, dispatch, ADD_VIDEO_COMMENT_FAILURE);
    }
  };
