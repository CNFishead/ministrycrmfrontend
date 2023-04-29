import axios from '../../../utils/axios';
import {
  CATEGORY_UPDATE_REQUEST,
  CATEGORY_UPDATE_SUCCESS,
  CATEGORIES_LIST_RESET,
} from '../../constants/categoryConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { setAlert } from '../alert';

export default (category) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_UPDATE_REQUEST });
    const { data } = await axios.put(`/category/${category._id}`, category);
    dispatch({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
    dispatch(setAlert(`Category updated successfully`, 'success'));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
