import axios from '../../../utils/axios';
import {
  GET_ALERTS_FAILURE,
  GET_ALERTS_REQUEST,
  GET_ALERTS_SUCCESS,
} from '../../constants/alertConstants';
import { errorHandler } from '../../../utils/errorHandler';

/**
 *  @description      Retrieves all alerts from the server
 *  @param            {String} keyword - The keyword to search for
 *
 */
export default (keyword = '', pageNumber = 1, admin = false) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_ALERTS_REQUEST,
      });
      const { data } = await axios.get(
        `/admin/alert?keyword=${keyword}&pageNumber=${pageNumber}&admin=${admin}`
      );
      dispatch({
        type: GET_ALERTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      errorHandler(dispatch, error, GET_ALERTS_FAILURE);
    }
  };
