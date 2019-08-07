import {
  GET_INCOMING_DATA_REQUEST,
  GET_INCOMING_DATA_SUCCESS,
  GET_INCOMING_DATA_ERROR,
  TOGGLE_CHART,
  SHOW_ALL_CHARTS,
  HIDE_ALL_CHARTS
} from './constants';

const initialState = {
  incomingCharts: [],
  filterCharts: [],
  pages: 0,
  error: '',
  loading: false
};

export const charts = (state = initialState, action) => {
  switch (action.type) {
    case GET_INCOMING_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_INCOMING_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        incomingCharts: action.payload.charts
      };

    case GET_INCOMING_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case TOGGLE_CHART:
      return {
        ...state,
        incomingCharts: state.incomingCharts.map(chart =>
          chart.id === action.payload ? { ...chart, hide: !chart.hide } : chart
        )
      };

    case SHOW_ALL_CHARTS:
      return {
        ...state,
        incomingCharts: state.incomingCharts.map(chart => ({ ...chart, hide: false }))
      };

    case HIDE_ALL_CHARTS:
      return {
        ...state,
        incomingCharts: state.incomingCharts.map(chart => ({ ...chart, hide: true }))
      };

    default:
      return state;
  }
};
