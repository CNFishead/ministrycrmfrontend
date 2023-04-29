import axios from '../../../utils/axios';
import {
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from '../../constants/userConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (id) => async (dispatch, getState) => {
  try {
    // get the loading state from the store and check if it's true, if it is, return
    const {
      userDetails: { loading },
    } = getState().user;
    if (loading) return;
    dispatch({
      type: GET_USER_REQUEST,
    });
    const { data } = await axios.get(`/user/${id}`);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, GET_USER_FAIL);
  }
};
