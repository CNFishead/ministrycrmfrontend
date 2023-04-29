
import {
  GET_FEATURE_REQUEST,
  GET_FEATURE_RESET,
  GET_FEATURE_SUCCESS,
} from '../../constants/featureConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_FEATURE_REQUEST:
      return { loading: true };
    case GET_FEATURE_SUCCESS:
      return { loading: false, feature: action.payload };
    case GET_FEATURE_RESET:
      return {};
    default:
      return state;
  }
};
