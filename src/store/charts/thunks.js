import { getIncomingData } from '../api/charts';
import { getIncomingDataRequest, getIncomingDataSuccess, getIncomingDataError } from './actions';

export const handleIncomingDataGetting = () => dispatch => {
  dispatch(getIncomingDataRequest());
  getIncomingData()
    .then(incomingData => {
      dispatch(getIncomingDataSuccess(incomingData.default));
    })
    .catch(({ message }) => dispatch(getIncomingDataError(message)));
};
