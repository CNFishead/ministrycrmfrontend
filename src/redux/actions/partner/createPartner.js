import axios from '../../../utils/axios';
import {
  PARTNER_CREATE_REQUEST,
  PARTNER_CREATE_SUCCESS,
} from '../../constants/partnerConstants';
import { errorHandler } from '../../../utils/errorHandler';
import { setAlert } from '../alert';

export default (formData) => async (dispatch) => {
  try {
    dispatch({ type: PARTNER_CREATE_REQUEST });
    const { data } = await axios.post(`/partner`, formData);
    dispatch({ type: PARTNER_CREATE_SUCCESS, payload: data });
    dispatch(setAlert('Partner Created', 'success'));
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
