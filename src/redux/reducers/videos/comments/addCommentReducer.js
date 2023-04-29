import { ADD_VIDEO_COMMENT_FAILURE, ADD_VIDEO_COMMENT_REQUEST } from "../../../constants/videoContants";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_VIDEO_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_VIDEO_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
