import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBolt,
  faCloud,
  faCloudRain,
  faCloudShowersHeavy,
  faSmog,
  faSnowflake,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import store from './store/store';
import * as serviceWorker from './serviceWorker';

import './index.css';

import City from './pages/City';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { GlobalStyle } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/:city" component={City} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

library.add(faSun, faCloudShowersHeavy, faCloud, faSmog, faCloudRain, faBolt, faSnowflake);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
