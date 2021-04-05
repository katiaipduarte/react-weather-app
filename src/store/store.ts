import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Location } from '../interfaces/location';
import { SearchState } from './search/type';

import currentLocationReducer from './current-location/reducer';
import searchStateReducer from './search/reducer';

export interface GlobalState {
  currentLocationState: Location;
  searchState: SearchState;
}

const combinedReducer = combineReducers<GlobalState>({
  currentLocationState: currentLocationReducer,
  searchState: searchStateReducer,
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
