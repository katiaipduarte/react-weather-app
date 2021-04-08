import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBolt,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faHeart,
  faSearchLocation,
  faSmog,
  faSnowflake,
  faSun,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

import store from './store/store';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

library.add(
  faSun,
  faCloudShowersHeavy,
  faCloud,
  faSmog,
  faCloudRain,
  faBolt,
  faSnowflake,
  faBars,
  faSearchLocation,
  faTimes,
  faHeart,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
