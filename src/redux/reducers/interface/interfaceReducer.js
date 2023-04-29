import { TOGGLE_SIDEBAR } from '../../constants/interfaceConstants';

export const interfaceReducer = (state = { sidebarClosed: true }, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarClosed: state.sidebarClosed ? false : true };

    default:
      return state;
  }
};
