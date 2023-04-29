import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  GET_KEYS_REQUEST,
  GET_KEYS_SUCCESS,
  GET_KEYS_FAILURE,
} from '../../constants/keysConstants';
export default (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_KEYS_REQUEST });
    const { data } = await axios.get(`/admin/user/${id}/keys`);
    dispatch({ type: GET_KEYS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, GET_KEYS_FAILURE);
  }
};
