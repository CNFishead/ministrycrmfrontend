import {
  UPDATE_FEATURE_FAIL,
  UPDATE_FEATURE_REQUEST,
  UPDATE_FEATURE_SUCCESS,
} from '../../constants/featureConstants';
import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';

export default (feature) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_FEATURE_REQUEST });
    const { data } = await axios.put(`/admin/features/${feature._id}`, feature);
    dispatch({ type: UPDATE_FEATURE_SUCCESS, payload: data });
  } catch (error) {
    errorHandler(error, dispatch, UPDATE_FEATURE_FAIL);
  }
};
