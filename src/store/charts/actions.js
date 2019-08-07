import {
  GET_INCOMING_DATA_REQUEST,
  GET_INCOMING_DATA_SUCCESS,
  GET_INCOMING_DATA_ERROR,
  TOGGLE_CHART,
  SHOW_ALL_CHARTS,
  HIDE_ALL_CHARTS
} from './constants';

export const getIncomingDataRequest = () => ({
  type: GET_INCOMING_DATA_REQUEST
});

export const getIncomingDataSuccess = incomingData => ({
  type: GET_INCOMING_DATA_SUCCESS,
  payload: incomingData
});

export const getIncomingDataError = error => ({
  type: GET_INCOMING_DATA_ERROR,
  payload: error
});

export const toggleChart = id => ({
  type: TOGGLE_CHART,
  payload: id
});

export const showAllCharts = () => ({
  type: SHOW_ALL_CHARTS
});

export const hideAllCharts = () => ({
  type: HIDE_ALL_CHARTS
});
