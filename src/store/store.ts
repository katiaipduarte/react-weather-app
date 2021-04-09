import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { LocationWeatherInformation } from '../interfaces/location-weather-info';
import { SearchState } from './search/type';
import { FavouriteLocations } from './favourite-locations/type';
import { RecentlyViewed } from './recently-viewed/type';

import currentLocationReducer from './current-location/reducer';
import searchStateReducer from './search/reducer';
import favouriteLocationsReducer from './favourite-locations/reducer';
import recentlyViewedReducer from './recently-viewed/reducer';
import { CurrentLocation } from './current-location/type';

export interface GlobalState {
  currentLocationState: CurrentLocation;
  searchState: SearchState;
  favouriteLocationsState: FavouriteLocations;
  recentlyViewedState: RecentlyViewed;
}

const combinedReducer = combineReducers<GlobalState>({
  currentLocationState: currentLocationReducer,
  searchState: searchStateReducer,
  favouriteLocationsState: favouriteLocationsReducer,
  recentlyViewedState: recentlyViewedReducer,
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
