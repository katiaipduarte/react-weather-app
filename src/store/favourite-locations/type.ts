import { Location } from '../../interfaces/location';

export const FavouriteLocationsType = {
  ADD_FAVOURITE: '@@FAVOURITE_LOCATIONS/ADD_FAVOURITE',
  DELETE_FAVOURITE: '@@FAVOURITE_LOCATIONS/DELETE_FAVOURITE',
};

export interface FavouriteLocations {
  locations: Location[];
}

export const FAVOURITE_LOCATIONS_INITIAL_STATE: FavouriteLocations = {
  locations: [{ city: 'Lisbon', country: 'Portugal', lat: 38.7259284, lon: -9.137382 }], //Original value: -9.137382,17 but since it's not reading the float it was rounded to -9.137382
};
