import {
  CART_SUBSCRIPTION,
  GET_SUBSCRIPTION,
  GET_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS_REQUEST,
  GET_SUBSCRIPTION_REQUEST,
  SUBSCRIPTION_TO_UPGRADE_TO,
} from '../../constants/subConstants';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SUBSCRIPTION:
      return {
        ...state,
        loading: false,
        subscription: action.payload,
      };
    case GET_SUBSCRIPTIONS_REQUEST:
      return { ...state, loading: true };
    case GET_SUBSCRIPTIONS:
      return { ...state, loading: false, subscriptions: action.payload };
    case CART_SUBSCRIPTION:
      localStorage.setItem(
        'features',
        JSON.stringify({
          features: action.payload.selectedFeatures,
          discount: action.payload.discount,
          price: action.payload.price,
        })
      );
      return {
        ...state,
        loading: false,
        features: action.payload.selectedFeatures,
        discount: action.payload.discount,
        price: action.payload.price,
      };
    case SUBSCRIPTION_TO_UPGRADE_TO:
      localStorage.setItem(
        'subs',
        JSON.stringify({ updatedSubscription: action.payload })
      );
      return {
        ...state,
        loading: false,
        updatedSubscription: action.payload,
      };

    default:
      return state;
  }
};
