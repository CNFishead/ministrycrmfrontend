import {
  SOCKET_CONNECT,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_SUCCESS,
  SOCKET_DISCONNECT,
} from '../constants/socketConstants';

export const socketReducer = (state = {}, action) => {
  switch (action.type) {
    case SOCKET_CONNECT:
      return { ...state, isConnecting: true };
    case SOCKET_CONNECT_SUCCESS:
      return { ...state, isConnecting: false, socket: action.payload.socket };
    case SOCKET_DISCONNECT:
      return { ...state, isConnecting: false, socket: null };
    case SOCKET_CONNECT_ERROR:
      return { ...state, isConnecting: false, error: action.payload };
    default:
      return state;
  }
};
