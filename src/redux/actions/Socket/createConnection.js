import io from 'socket.io-client';
import {
  SOCKET_CONNECT,
  SOCKET_CONNECT_ERROR,
  SOCKET_CONNECT_SUCCESS,
} from '../../constants/socketConstants';
import { errorHandler } from '../../../utils/errorHandler';
import axios from '../../../utils/axios';

export const createConnection = () => async (dispatch, getState) => {
  try {
    // get the user from state
    const { user } = getState().auth;
    const {
      socketConnection: { socket, isConnecting },
    } = getState().socket;
    if (socket || isConnecting) return;
    dispatch({ type: SOCKET_CONNECT });
    const connection = io(
      process.env.NODE_ENV === 'production'
        ? process.env.API
        : 'http://localhost:5000'
    );
    await connection.on('connect', () => {
      console.log('connected');
      dispatch({ type: SOCKET_CONNECT_SUCCESS, payload: connection });
      connection.emit('setup', user);
    });
  } catch (error) {
    errorHandler(error, dispatch, SOCKET_CONNECT_ERROR);
  }
};
