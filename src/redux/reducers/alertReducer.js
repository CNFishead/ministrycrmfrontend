import { combineReducers } from 'redux';
import {
  CREATE_ALERT_FAILURE,
  CREATE_ALERT_REQUEST,
  CREATE_ALERT_SUCCESS,
  DELETE_ALERT_FAILURE,
  DELETE_ALERT_REQUEST,
  DELETE_ALERT_SUCCESS,
  GET_ALERTS_FAILURE,
  GET_ALERTS_REQUEST,
  GET_ALERTS_SUCCESS,
  GET_ALERT_FAILURE,
  GET_ALERT_REQUEST,
  GET_ALERT_RESET,
  GET_ALERT_SUCCESS,
  REMOVE_ALERT,
  SET_ALERT,
  UPDATE_ALERT_FAILURE,
  UPDATE_ALERT_REQUEST,
  UPDATE_ALERT_RESET,
  UPDATE_ALERT_SUCCESS,
} from '../constants/alertConstants';

const alertsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

// Get Alerts
const getAlertsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALERTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALERTS_SUCCESS:
      return {
        ...state,
        loading: false,
        alerts: action.payload.alerts,
        pages: action.payload.pages,
        page: action.payload.page,
        prevPage: action.payload.prevPage,
        nextPage: action.payload.nextPage,
      };
    case GET_ALERTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Update Alert
const updateAlertReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ALERT_REQUEST:
    case DELETE_ALERT_REQUEST:
    case UPDATE_ALERT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ALERT_SUCCESS:
    case DELETE_ALERT_SUCCESS:
    case UPDATE_ALERT_SUCCESS:
      return {
        ...state,
        loading: false,
        alert: action.payload,
      };
    case DELETE_ALERT_FAILURE:
    case UPDATE_ALERT_FAILURE:
    case CREATE_ALERT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_ALERT_RESET:
      return {};
    default:
      return state;
  }
};

// Get Alert
const getAlertReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALERT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALERT_SUCCESS:
      return {
        ...state,
        loading: false,
        alert: action.payload,
      };
    case GET_ALERT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_ALERT_RESET:
      return {};
    default:
      return state;
  }
};

export const alertReducers = combineReducers({
  alerts: alertsReducer,
  alertList: getAlertsReducer,
  alertUpdate: updateAlertReducer,
  alertDetails: getAlertReducer,
});
