import {
  GET_VIDEO_REQUEST,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  GET_VIDEO_RESET,
} from '../../constants/videoContants';
export default (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEO_REQUEST:
      return { ...state, loading: true };
    case GET_VIDEO_SUCCESS:
      return { loading: false, video: action.payload };
    case GET_VIDEO_FAILURE:
      return { loading: false, error: action.payload };
    case GET_VIDEO_RESET:
      return {};
    default:
      return state;
  }
};
