import { TOGGLE_CONTROL_LAYOUT, TOGGLE_SIDEBAR } from '../../constants/interfaceConstants';


interface InterfaceState {
  sidebarClosed: boolean;
  controlLayoutOpen: boolean;
}

export const interfaceReducer = (state = { sidebarClosed: true, controlLayoutOpen: true, }, action: any): InterfaceState => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarClosed: state.sidebarClosed ? false : true };
    case TOGGLE_CONTROL_LAYOUT:
      return { ...state, controlLayoutOpen: state.controlLayoutOpen ? false : true };
    default:
      return state;
  }
};
