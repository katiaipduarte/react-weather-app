import { action, PayloadAction } from 'typesafe-actions';
import { Location } from '../../interfaces/location';
import { FavouriteLocationsType } from './type';

export const addFavouriteLocation = (location: Location): PayloadAction<string, Location> =>
  action(FavouriteLocationsType.ADD_FAVOURITE, location);

export const deleteFavouriteLocation = (location: Location): PayloadAction<string, Location> =>
  action(FavouriteLocationsType.DELETE_FAVOURITE, location);
