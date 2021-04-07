import { action, PayloadAction } from 'typesafe-actions';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import { FavouriteLocationsType } from './type';

export const addFavouriteLocation = (
  location: LocationWeatherInformation,
): PayloadAction<string, LocationWeatherInformation> => action(FavouriteLocationsType.ADD_FAVOURITE, location);

export const deleteFavouriteLocation = (
  location: LocationWeatherInformation,
): PayloadAction<string, LocationWeatherInformation> => action(FavouriteLocationsType.DELETE_FAVOURITE, location);
