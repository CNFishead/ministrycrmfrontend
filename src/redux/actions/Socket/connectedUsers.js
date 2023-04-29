export default (users) => (dispatch) => {
  try {
    dispatch({
      type: 'SOCKET_ONLINE_USERS',
      payload: users,
    });
  } catch (error) {
    console.log(error);
    errorHandler(error, 'Error in connectedUsers action');
  }
};
