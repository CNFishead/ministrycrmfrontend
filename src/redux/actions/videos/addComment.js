import { errorHandler } from '../../../utils/errorHandler';
import {
  ADD_VIDEO_COMMENT_FAILURE,
  ADD_VIDEO_COMMENT_REQUEST,
  ADD_VIDEO_COMMENT_SUCCESS,
} from '../../constants/videoContants';
import axios from '../../../utils/axios';

export default (videoId, commentData, sendThroughSocket, save) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: ADD_VIDEO_COMMENT_REQUEST });
      console.log(commentData);

      if (save) {
        const { data } = await axios.post(`/video/${videoId}/comments`, {
          comment: commentData,
        });

        if (sendThroughSocket) {
          getState().socket.socket.socket.emit('sendNewComment', {
            commentData: data,
            videoId,
          });
        }

        return dispatch({
          type: ADD_VIDEO_COMMENT_SUCCESS,
          payload: data,
        });
      } else {
        return dispatch({
          type: ADD_VIDEO_COMMENT_SUCCESS,
          payload: commentData,
        });
      }
    } catch (error) {
      errorHandler(error, dispatch, ADD_VIDEO_COMMENT_FAILURE);
    }
  };
