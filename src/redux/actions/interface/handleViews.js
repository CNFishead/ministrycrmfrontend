import axios from '../../../utils/axios';
import { errorHandler } from '../../../utils/errorHandler';

export default (id) => async (dispatch) => {
  try {
    let ipAddress;
    const {
      data: { ipString },
    } = await axios.get('https://api.bigdatacloud.net/data/client-ip', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    ipAddress = ipString;
    await axios.put(`/video/${id}/view`, {
      ip: ipAddress,
    });
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch);
  }
};
