import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import ContentWrapper from './Components/ContentWrapper';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ContentWrapper />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
