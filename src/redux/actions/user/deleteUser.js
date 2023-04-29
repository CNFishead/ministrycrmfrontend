import {
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
} from '../../constants/userConstants';
import axios from '../../../utils/axios';
import { setAlert } from '../../actions/alert';
import { errorHandler } from '../../../utils/errorHandler';

// Admin Action to remove user completely from system
// If you simply wish to make user unable to log in
// ./inactive.js should be used.
export default (id) => async (dispatch) => {
  try {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch({
        type: USER_DELETE_REQUEST,
      });
      await axios.delete(`/admin/deleteuser/${id}`);

      dispatch({ type: USER_DELETE_SUCCESS });
      dispatch(setAlert(`User: ${id} was permanently removed`, 'success'));
      // go back after 3 seconds
      setTimeout(() => {
        window.history.back();
      }, 1500);
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, USER_DELETE_FAIL);
  }
};
