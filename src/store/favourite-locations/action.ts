import { action, PayloadAction } from 'typesafe-actions';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import { FavouriteLocationsType } from './type';

export const initFavouriteLocation = (
  locations: LocationWeatherInformation[],
): PayloadAction<string, LocationWeatherInformation[]> => action(FavouriteLocationsType.INIT_FAVOURITES, locations);

export const addFavouriteLocation = (
  location: LocationWeatherInformation,
): PayloadAction<string, LocationWeatherInformation> => action(FavouriteLocationsType.ADD_FAVOURITE, location);

export const deleteFavouriteLocation = (
  location: LocationWeatherInformation,
): PayloadAction<string, LocationWeatherInformation> => action(FavouriteLocationsType.DELETE_FAVOURITE, location);
