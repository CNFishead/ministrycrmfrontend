import io from 'socket.io-client';
import {
  SOCKET_CONNECT,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_SUCCESS,
} from '../../constants/socketConstants';
import { errorHandler } from '../../../utils/errorHandler';

export const addSocketConnection = (socket) => async (dispatch, getState) => {
  try {
    // get socket connection
    dispatch({
      type: SOCKET_CONNECT_SUCCESS,
      payload: { socket },
    });
  } catch (error) {
    errorHandler(error, dispatch, SOCKET_CONNECT_ERROR);
  }
};
