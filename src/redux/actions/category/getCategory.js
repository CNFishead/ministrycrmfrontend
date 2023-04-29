import axios from '../../../utils/axios';
import {
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
} from '../../../constants/categoryConstants';
import { setAlert } from '../../alert';
import { logout } from '../../authActions';

export const getCategory = (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_DETAILS_REQUEST });
    const { data } = await axios.get(`/category/${id}`);
    dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch(setAlert(message, 'danger'));
  }
};
