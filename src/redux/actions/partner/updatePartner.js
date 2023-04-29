import axios from '../../../utils/axios';
import {
  PARTNER_UPDATE_REQUEST,
  PARTNER_UPDATE_SUCCESS,
} from '../../constants/partnerConstants';
import { errorHandler } from '../../../utils/errorHandler';

export default (partner) => async (dispatch) => {
  try {
    dispatch({ type: PARTNER_UPDATE_REQUEST });
    const { data: updatedPartner } = await axios.put(
      `/partner/${partner._id}`,
      partner
    );
    dispatch({ type: PARTNER_UPDATE_SUCCESS, payload: updatedPartner });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
