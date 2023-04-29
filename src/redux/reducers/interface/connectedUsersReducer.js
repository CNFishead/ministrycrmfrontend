import { SOCKET_ONLINE_USERS } from '../../constants/socketConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case SOCKET_ONLINE_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
