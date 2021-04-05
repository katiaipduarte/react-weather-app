import { Reducer } from 'redux';
import { Location } from '../../interfaces/location';
import { FAVOURITE_LOCATIONS_INITIAL_STATE, FavouriteLocationsType, FavouriteLocations } from './type';

type FavouriteLocationsReducer = {
  type: string;
  payload?: any;
};

const favouriteLocationsReducer: Reducer<FavouriteLocations> = (
  state: FavouriteLocations = FAVOURITE_LOCATIONS_INITIAL_STATE,
  action: FavouriteLocationsReducer,
) => {
  switch (action.type) {
    case FavouriteLocationsType.ADD_FAVOURITE:
      return {
        locations: [...state.locations, action.payload],
      };
    case FavouriteLocationsType.DELETE_FAVOURITE:
      return {
        locations: state.locations.filter(
          (i: Location) => !(i.city === action.payload.city && i.country === action.payload.country),
        ),
      };
    default:
      return { ...state };
  }
};

export default favouriteLocationsReducer;
