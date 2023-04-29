import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';

export default (partner, image) => async (dispatch) => {
  try {
    await axios.put(`/partner/${partner}?partner=true`, {
      partnerLogo: image,
    });
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
