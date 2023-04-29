import {
  ADD_VIDEO_COMMENT_SUCCESS,
  GET_VIDEO_COMMENTS_FAILURE,
  GET_VIDEO_COMMENTS_REQUEST,
  GET_VIDEO_COMMENTS_RESET,
  GET_VIDEO_COMMENTS_SUCCESS,
} from '../../../constants/videoContants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEO_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    // this reducer will be fired off from the addComment action
    case ADD_VIDEO_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: [action.payload.comment, ...state.comments],
        meta: { ...state.meta, total: state.comments.length + 1 },
      };
    case GET_VIDEO_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        comments: action.payload.comments,
        meta: action.payload.meta,
        message: action.payload.message,
      };
    case GET_VIDEO_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_VIDEO_COMMENTS_RESET:
      return {};
    default:
      return state;
  }
};
