import {
  SERVER_VIDEO_UPLOAD_FAIL,
  SERVER_VIDEO_UPLOAD_REQUEST,
  SERVER_VIDEO_UPLOAD_RESET,
  SERVER_VIDEO_UPLOAD_SUCCESS,
} from '../../constants/userConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case SERVER_VIDEO_UPLOAD_REQUEST:
      return { loading: true };
    case SERVER_VIDEO_UPLOAD_SUCCESS:
      return { loading: false, success: true };
    case SERVER_VIDEO_UPLOAD_FAIL:
      return { loading: false, error: action.payload };
    case SERVER_VIDEO_UPLOAD_RESET:
      return {};
    default:
      return state;
  }
};
