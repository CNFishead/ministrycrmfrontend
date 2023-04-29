import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from '../../constants/authConstants';
import { errorHandler } from '../../../utils/errorHandler';
import axios from '../../../utils/axios';

/**
 * @description Login user with token
 */
export default (token) => async (dispatch, getState) => {
  try {
    // this checks to see if their has been a request already
    if (getState().auth.loading) return;
    dispatch({ type: USER_LOGIN_REQUEST });
    const { data } = await axios.post('/auth/me', { token });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.user });
    localStorage.setItem('user', JSON.stringify(data.user));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, USER_LOGIN_FAIL);
  }
};
