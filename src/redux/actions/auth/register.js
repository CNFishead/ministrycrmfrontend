import axios from '../../../utils/axios';
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../../constants/authConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { setAlert } from '../alert';
export default (user, router) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const { data } = await axios.post(`/auth/registerfreeaccount`, user);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user,
    });
    dispatch(setAlert(`You have been successfully registered!`, 'success'));

    localStorage.setItem('user', JSON.stringify(data.user));
    if (router) {
      router.push('/');
    }
  } catch (error) {
    errorHandler(error, dispatch, USER_REGISTER_FAIL);
  }
};
