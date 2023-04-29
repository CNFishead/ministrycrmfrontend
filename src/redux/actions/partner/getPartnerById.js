import axios from '../../../utils/axios';
import {
  PARTNER_LIST_ONE_REQUEST,
  PARTNER_LIST_ONE_SUCCESS,
} from '../../constants/partnerConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (id) => async (dispatch) => {
  try {
    dispatch({ type: PARTNER_LIST_ONE_REQUEST });
    const { data } = await axios.get(`/partner/${id}`);
    dispatch({ type: PARTNER_LIST_ONE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
