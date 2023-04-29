import axios from '../../../utils/axios';
import {
  CATEGORY_CREATE_REQUEST,
  CATEGORY_CREATE_SUCCESS,
} from '../../constants/categoryConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { setAlert } from '../alert';

export default (formData) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_CREATE_REQUEST });
    const { data } = await axios.post(`/category`, formData);
    dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: data });
    dispatch(setAlert(`Category ${formData.name} created successfully`, 'success'))
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
