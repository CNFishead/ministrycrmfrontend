import {
  UPDATE_FEATURE_FAIL,
  UPDATE_FEATURE_REQUEST,
  UPDATE_FEATURE_RESET,
  UPDATE_FEATURE_SUCCESS,
} from '../../constants/featureConstants';

/**
 * @description:  This reducer manages the state for updating a feature object from the admin panel
 *
 */
export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FEATURE_REQUEST:
      return { loading: true };
    case UPDATE_FEATURE_SUCCESS:
      return { loading: false, success: true };
    case UPDATE_FEATURE_FAIL:
      return { loading: false, error: action.payload };
    case UPDATE_FEATURE_RESET:
      return {};
    default:
      return state;
  }
};
