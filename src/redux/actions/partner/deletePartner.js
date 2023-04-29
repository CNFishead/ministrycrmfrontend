import axios from '../../../utils/axios';
import {
  PARTNER_DELETE_FAIL,
  PARTNER_DELETE_REQUEST,
  PARTNER_DELETE_SUCCESS,
} from '../../../constants/partnerConstants';
import { setAlert } from '../../alert';
import { logout } from '../../authActions';
import { errorHandler } from '../../../utils/errorHandler';

// This action is not reversible.
export default (id) => async (dispatch) => {
  try {
    if (
      window.confirm(
        `Are you sure you wish to remove this partner? this action cannot be undone`
      )
    ) {
      dispatch({
        type: PARTNER_DELETE_REQUEST,
      });
      await axios.delete(`/partner/${id}`);
      dispatch({ type: PARTNER_DELETE_SUCCESS });
      dispatch(
        setAlert(`Partner record ${id} was Successfully deleted`, 'success')
      );
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, dispatch, PARTNER_DELETE_FAIL);
  }
};
