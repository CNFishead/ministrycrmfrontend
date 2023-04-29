import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';
// import { addSocketConnection } from '../redux/actions/Socket/addSocketConnection';
import { USER_LOGIN_SUCCESS } from '../redux/constants/authConstants';
import {
  SOCKET_CONNECT,
  SOCKET_ONLINE_USERS,
} from '../redux/constants/socketConstants';

const SocketWrapper = (props) => {
  const { user } = useSelector((state) => state.auth);
  const {
    socket: { socket, isConnecting },
  } = useSelector((state) => state.socket);
  const dispatch = useDispatch();
  const socketInitializer = async () => {
    dispatch({ type: SOCKET_CONNECT });
    const socketio = io(
      process.env.NODE_ENV === 'production'
        ? process.env.API.replace('/api/v1', '')
        : 'http://localhost:5000'
    );
    // dispatch(addSocketConnection(socketio));
  };

  useEffect(() => {
    if (socket || isConnecting) return;
    socketInitializer();
  }, []);

  useEffect(() => {
    if (socket && user) {
      socket.emit('setup', user);
      socket.on('updateUser', (user) => {
        // console.log(user);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
        localStorage.setItem('user', JSON.stringify(user));
      });
      if (user?.isAdmin) {
        // emit an event to the server to get all the users, currently connected
        socket.emit('getConnectedUsers', socket.id);
      }
      socket.on('connectedUsers', (users) => {
        // console.log(users);
        dispatch({ type: SOCKET_ONLINE_USERS, payload: users });
      });

      // if the socket disconnects, attempt to reconnect
      socket.on('disconnect', () => {
        socketInitializer();
      });
    }
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket, user]);

  return <>{props.children}</>;
};

export default SocketWrapper;
