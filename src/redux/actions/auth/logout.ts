import { Dispatch } from 'redux';
import { USER_LOGOUT } from '../../constants/authConstants';

export default (href = '/') =>
  async (dispatch: Dispatch) => {
    localStorage.removeItem('user');
    dispatch({ type: USER_LOGOUT });
    window.location.href = href;
  };
