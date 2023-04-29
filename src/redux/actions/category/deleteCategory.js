import axios from '../../../utils/axios';
import {
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
} from '../../constants/categoryConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (id) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_DELETE_REQUEST });
    if (window.confirm('Are you sure you want to delete this category?')) {
      const { data } = await axios.delete(`/category/${id}`);
      dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: data });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
