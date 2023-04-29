import axios from '../../../utils/axios';
import { GET_PARTNER_LOGO } from '../../constants/partnerConstants';
import { errorHandler } from '../../../utils/errorHandler';

/**
 *  @function getPartnerLogo
 *  @param {object} user - user object
 *  @description - makes a request to get the partner logo, of which the user is an owner of
 *  @returns {object} - returns an action object with the type and payload
 *  @throws {error} - throws an error if the request fails
 *  @version 1.0
 */
export default (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/partner/${user._id}/logo`);
    dispatch({ type: GET_PARTNER_LOGO, payload: data });
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
