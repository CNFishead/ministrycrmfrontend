import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  GET_VIDEOS_FAILURE,
  GET_VIDEOS_REQUEST,
  GET_VIDEOS_SUCCESS,
} from '../../constants/videoContants';

export default (
    keyword = '',
    pageNumber = 1,
    sortBy = '',
    limit = 10,
    status = '',
    params
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_VIDEOS_REQUEST,
      });
      const { data } = await axios.get(
        `/admin/video?keyword=${keyword}&pageNumber=${pageNumber}&sortBy=${sortBy}&limit=${limit}&status=${status}&partner=${params.partner}`
      );
      dispatch({
        type: GET_VIDEOS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, GET_VIDEOS_FAILURE);
    }
  };
