import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';
import {
  CATEGORIES_LIST_REQUEST,
  CATEGORIES_LIST_SUCCESS,
} from '../../constants/categoryConstants';

export const getCategories =
  (keyword = '', pageNumber = 1, limit = 10) =>
  async (dispatch, getState) => {
    try {
      // check if the state is loading if it is return
      if (getState().category.categoryList.loading) return;
      dispatch({ type: CATEGORIES_LIST_REQUEST });

      const { data } = await axios.get(
        `/category?keyword=${keyword}&pageNumber=${pageNumber}&limit=${limit}`
      );
      dispatch({ type: CATEGORIES_LIST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      errorHandler(error, dispatch);
    }
  };

export default getCategories;
