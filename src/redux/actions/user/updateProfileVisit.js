import { errorHandler } from '../../../utils/errorHandler';
import updateUser from '../auth/update';
export default (loggedInUser, user) => async (dispatch) => {
  try {
    const subscribedTo = loggedInUser.subscribedTo.map((u) => {
      if (
        u.user === user._id
        // new Date(u.lastVisited).toDateString() !== new Date().toDateString()
      ) {
        return {
          ...u,
          lastVisited: Date.now(),
          count: u.count ? u.count + 1 : 1,
        };
      }

      return u;
    });
    await dispatch(updateUser({ subscribedTo }));
  } catch (e) {
    errorHandler(e, dispatch);
  }
};
