import { errorHandler } from '../../../utils/errorHandler';
import updateUser from '../auth/update';
import { setAlert } from '../alert';
export default (loggedInUser, user) => async (dispatch) => {
  try {
    //Run the subscribe route on the backend and pass in the user id as a parameter

    var isSubscribed;
    try {
      isSubscribed = loggedInUser.subscribedTo.find((u) => {
        if (u.user.toString() === user._id.toString()) {
          return u;
        }
      });
    } catch {
      isSubscribed = false;
    }

    if (!isSubscribed) {
      console.log({ user: user._id, profile: user.profile });

      var subscribedTo;
      if (loggedInUser?.subscribedTo) {
        subscribedTo = [
          ...loggedInUser.subscribedTo,
          {
            user: user._id,
            profile: user.profile._id,
            count: 1,
            lastVisited: Date.now(),
          },
        ];
      } else {
        subscribedTo = [
          {
            user: user._id,
            profile: user.profile._id,
            count: 1,
            lastVisited: Date.now(),
          },
        ];
      }

      console.log(subscribedTo);

      await dispatch(updateUser({ subscribedTo }));
      dispatch(
        setAlert(
          `You have successfully subscribed to ${user.profile.organizationName}`,
          'success'
        )
      );
    } else {
      const subscribedTo = loggedInUser.subscribedTo.filter((u) => {
        if (u.user.toString() !== user._id.toString()) {
          return u;
        }
      });
      await dispatch(updateUser({ subscribedTo }));

      dispatch(
        setAlert(
          `You have successfully unsubscribed from ${user.profile.organizationName}`,
          'success'
        )
      );
      console.log('already subscribed');
    }
  } catch (e) {
    errorHandler(e, dispatch);
  }
};
