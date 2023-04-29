import {
  VIDEO_DELETE_FAILURE,
  VIDEO_DELETE_REQUEST,
  VIDEO_DELETE_SUCCESS,
  VIDEO_UPDATE_FAILURE,
  VIDEO_UPDATE_REQUEST,
  VIDEO_UPDATE_RESET,
  VIDEO_UPDATE_SUCCESS,
} from '../../constants/videoContants';

export default (state = {}, action) => {
  switch (action.type) {
    case VIDEO_UPDATE_REQUEST:
    case VIDEO_DELETE_REQUEST:
      return { loading: true };
    case VIDEO_UPDATE_SUCCESS:
    case VIDEO_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        // if a video is passed back, then it is the updated video
        // if no video is passed back, then it is the deleted video
        // video: action.payload.video ? action.payload.video : action.payload,
      };
    case VIDEO_UPDATE_FAILURE:
    case VIDEO_DELETE_FAILURE:
      return { loading: false, error: action.payload };
    case VIDEO_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};
