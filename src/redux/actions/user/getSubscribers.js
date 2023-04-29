import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
} from '../../constants/userConstants';

export default (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_LIST_REQUEST });
    const { data } = await axios.get(`/admin/user/${id}/subscribers`);
    dispatch({ type: USER_LIST_SUCCESS, payload: { users: data.subscribers } });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, USER_LIST_FAIL);
  }
};
