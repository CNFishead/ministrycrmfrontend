import axios from '../../../utils/axios';
import {
  DYNAMIC_CONTENT_REQUEST,
  GET_TOU,
  SELECTED_LEGAL,
} from '../../constants/dynamicConstants';
import { setAlert } from '../alert';
import { errorHandler } from '../../../utils/errorHandler';

export const getTOU =
  (select = false) =>
  async (dispatch) => {
    try {
      dispatch({ type: DYNAMIC_CONTENT_REQUEST });
      const { data } = await axios.get(`/dynamic/TOU`);
      if (select) {
        dispatch({ type: SELECTED_LEGAL, payload: data });
      }
      dispatch({ type: GET_TOU, payload: data });
    } catch (error) {
      errorHandler(error, dispatch);
    }
  };
