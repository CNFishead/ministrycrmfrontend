import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../../constants/userConstants';
import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';

/* Admin action to receive a list of users in the database */
export default (keyword, pageNumber = 1, sortBy = '') =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/admin/user?keyword=${keyword}&pageNumber=${pageNumber}&sortBy=${sortBy}&partner=true`
      );
      dispatch({
        type: USER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      errorHandler(error, dispatch, USER_LIST_FAIL);
    }
  };
