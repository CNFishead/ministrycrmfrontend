import {
  DYNAMIC_CONTENT_ERROR,
  DYNAMIC_CONTENT_REQUEST,
  DYNAMIC_CONTENT_RESET,
  GET_BANNER,
  GET_LOGO,
  GET_NEWS_SUCCESS,
  GET_PP,
  GET_TOU,
  SELECTED_LEGAL,
  UPDATE_DYNAMIC,
  UPDATE_LOGO,
  UPDATE_LOGO_RESET,
} from "../constants/dynamicConstants";

export const dynamicReducer = (
  state = {
    loading: false,
    logo: "",
    error: "",
    success: false,
    articles: [],
    tou: "",
    pp: "",
  },
  action
) => {
  switch (action.type) {
    case DYNAMIC_CONTENT_REQUEST:
      return { ...state, loading: true };
    case DYNAMIC_CONTENT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_LOGO:
      return { ...state, loading: false, logo: action.payload };
    case UPDATE_LOGO:
      return { ...state, loading: false, logo: action.payload, success: true };
    case UPDATE_LOGO_RESET:
      return { ...state, loading: false, logo: {}, success: false };
    case GET_BANNER:
      return { ...state, loading: false, banner: action.payload };
    case UPDATE_DYNAMIC:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case GET_TOU:
      return {
        ...state,
        loading: false,
        tou: action.payload,
      };
    case GET_PP:
      return {
        ...state,
        loading: false,
        pp: action.payload,
      };
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };
    case DYNAMIC_CONTENT_RESET:
      return {
        loading: false,
        logo: "",
        error: "",
        success: false,
        articles: [],
        tou: "",
        pp: "",
      };
    default:
      return state;
  }
};

export const legalReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case SELECTED_LEGAL:
      return {
        loading: false,
        legal: action.payload,
      };
    default:
      return state;
  }
};
