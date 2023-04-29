import { Dispatch } from 'redux';
import { TOGGLE_SIDEBAR } from '../../constants/interfaceConstants';
export const toggleSideBar = () => (dispatch: Dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  });
};
