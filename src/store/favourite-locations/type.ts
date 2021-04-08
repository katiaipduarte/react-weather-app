import { LocationWeatherInformation } from '../../interfaces/location-weather-info';

export const FavouriteLocationsType = {
  ADD_FAVOURITE: '@@FAVOURITE_LOCATIONS/ADD_FAVOURITE',
  DELETE_FAVOURITE: '@@FAVOURITE_LOCATIONS/DELETE_FAVOURITE',
  INIT_FAVOURITES: '@@FAVOURITE_LOCATIONS/INIT_FAVOURITES',
};

export interface FavouriteLocations {
  favourites: LocationWeatherInformation[];
  cookie_key: string;
}

export const FAVOURITE_LOCATIONS_INITIAL_STATE: FavouriteLocations = {
  favourites: [],
  cookie_key: 'FAVOURITES',
};
