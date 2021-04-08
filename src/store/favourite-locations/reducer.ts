import { Reducer } from 'redux';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
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
    case FavouriteLocationsType.INIT_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, ...action.payload],
      };
    case FavouriteLocationsType.ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case FavouriteLocationsType.DELETE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(
          (i: LocationWeatherInformation) =>
            !(
              i.location.city === action.payload.location.city && i.location.country === action.payload.location.country
            ),
        ),
      };
    default:
      return { ...state };
  }
};

export default favouriteLocationsReducer;
