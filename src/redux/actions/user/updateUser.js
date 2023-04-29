import {
  UPDATE_USER_FAIL,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from '../../constants/userConstants';
import { errorHandler } from '../../../utils/errorHandler';
import axios from '../../../utils/axios';
import { setAlert } from '../alert';

/**
 * @description dispatches an action to update the user
 * @param {object} formData - the form data
 *
 *
 */
export default (formData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_USER_REQUEST });
    const { data } = await axios.put(
      `/admin/updateuser/${formData._id}`,
      formData
    );
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    dispatch(setAlert('User updated successfully', 'success'));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, UPDATE_USER_FAIL);
  }
};
