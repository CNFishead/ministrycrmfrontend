import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_RESET,
  GET_VIDEOS_SUCCESS,
  GET_SERVER_VIDEOS_SUCCESS,
} from '../../constants/videoContants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEOS_REQUEST:
      return { loading: true };
    case GET_VIDEOS_SUCCESS:
      return {
        loading: false,
        videos: action.payload.videos,
        pages: action.payload.pages,
        page: action.payload.page,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      };
    case GET_SERVER_VIDEOS_SUCCESS:
      return {
        loading: false,
        serverVideos: action.payload,
      };
    case GET_VIDEOS_FAILURE:
      return { loading: false, error: action.payload };
    case GET_VIDEOS_RESET:
      return {};
    default:
      return state;
  }
};
