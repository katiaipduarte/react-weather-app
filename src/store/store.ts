import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Location } from '../interfaces/location';

import currentLocationReducer from './current-location/reducer';

export interface GlobalState {
  currentLocationState: Location;
}

const combinedReducer = combineReducers<GlobalState>({
  currentLocationState: currentLocationReducer,
});

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(combinedReducer, bindMiddleware([thunk]));

export default store;
