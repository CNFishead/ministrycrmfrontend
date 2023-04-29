import { TOGGLE_SIDEBAR } from '../../constants/interfaceConstants';


interface InterfaceState {
  sidebarClosed: boolean;
  controlLayoutOpen: boolean;
}

export const interfaceReducer = (state = { sidebarClosed: true, controlLayoutOpen: false, }, action: any): InterfaceState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarClosed: state.sidebarClosed ? false : true };

    default:
      return state;
  }
};
