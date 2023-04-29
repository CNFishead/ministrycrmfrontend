import axios from '../../../utils/axios';
import {
  DYNAMIC_CONTENT_REQUEST,
  UPDATE_DYNAMIC,
} from '../../constants/dynamicConstants';
import { setAlert } from '../alert';

export const updatePP = (form) => async (dispatch) => {
  try {
    dispatch({ type: DYNAMIC_CONTENT_REQUEST });
    // eslint-disable-next-line
    const { data } = await axios.put(`/dynamic/PP`, form);
    dispatch({ type: UPDATE_DYNAMIC });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch(setAlert(message, 'danger'));
  }
};
