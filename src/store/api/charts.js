//TODO: create and use backend

import * as incomingData from 'projectSettings';

export const getIncomingData = () => {
  const requestHandler = resolve => {
    setTimeout(() => {
      resolve(incomingData);
    }, 1);
  };
  return new Promise(requestHandler);
};
