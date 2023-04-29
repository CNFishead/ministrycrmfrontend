import axios from '../../../utils/axios';
import {
  VIDEO_DELETE_FAIL,
  VIDEO_DELETE_REQUEST,
  VIDEO_DELETE_SUCCESS,
} from '../../constants/videoContants';
import { setAlert } from '../alert';
import { errorHandler } from '../../../utils/errorHandler';

// User Action to remove {sermon} completely from system
// This action is not reversible.
export default (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        `Are you sure you wish to remove this video? this action cannot be undone`
      )
    ) {
      dispatch({
        type: VIDEO_DELETE_REQUEST,
      });
      await axios.delete(`/video/${id}`);
      dispatch({ type: VIDEO_DELETE_SUCCESS });
      dispatch(
        setAlert(`Video record ${id} was Successfully deleted`, 'success')
      );
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, VIDEO_DELETE_FAIL);
  }
};
