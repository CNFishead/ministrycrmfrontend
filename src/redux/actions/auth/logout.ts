import { Dispatch } from 'redux';
import { USER_LOGOUT } from '../../constants/authConstants';

export default (href = '/') =>
  async (dispatch: Dispatch) => {
    localStorage.removeItem('user');
    // remove the cookie here
    // to remove a cookie, you have to set its value to an empty string and set the expiration date to a date in the past
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    dispatch({ type: USER_LOGOUT });
    window.location.href = href;
  };
