import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../../constants/userConstants';
import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';

/* Admin action to receive a list of users in the database */
export const getUsers =
  (keyword, pageNumber = 1, params) =>
  async (dispatch, getState) => {
    try {
      // if the user list is already loading or the user list is already loaded, return
      dispatch({
        type: USER_LIST_REQUEST,
      });
      const { data } = await axios.get(
        `/admin/user?keyword=${keyword}&pageNumber=${pageNumber}&paid=${params.paid}&partner=${params.partner}&limit=${params.limit}`
      );
      dispatch({
        type: USER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch, USER_LIST_FAIL);
    }
  };
