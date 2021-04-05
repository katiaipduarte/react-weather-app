import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Location } from '../interfaces/location';
import { SearchState } from './search/type';
import { FavouriteLocations } from './favourite-locations/type';

import currentLocationReducer from './current-location/reducer';
import searchStateReducer from './search/reducer';
import favouriteLocationsReducer from './favourite-locations/reducer';

export interface GlobalState {
  currentLocationState: Location;
  searchState: SearchState;
  favouriteLocationsState: FavouriteLocations;
}

const combinedReducer = combineReducers<GlobalState>({
  currentLocationState: currentLocationReducer,
  searchState: searchStateReducer,
  favouriteLocationsState: favouriteLocationsReducer,
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
