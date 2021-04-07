import { LocationWeatherInformation } from '../../interfaces/location-weather-info';

export const FavouriteLocationsType = {
  ADD_FAVOURITE: '@@FAVOURITE_LOCATIONS/ADD_FAVOURITE',
  DELETE_FAVOURITE: '@@FAVOURITE_LOCATIONS/DELETE_FAVOURITE',
};

export interface FavouriteLocations {
  favourites: LocationWeatherInformation[];
}

export const FAVOURITE_LOCATIONS_INITIAL_STATE: FavouriteLocations = {
  favourites: [],
};
