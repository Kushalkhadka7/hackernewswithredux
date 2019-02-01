import React from 'react';
import './assets/css/index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './components/AppRouter';
import * as serviceWorker from './serviceWorker';

import Store from './store';

ReactDOM.render(
  <Provider store={Store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
