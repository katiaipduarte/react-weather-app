import { AnyAction } from 'redux';
import { CurrentWeather } from '../../interfaces/current-weather';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import favouriteLocationsReducer from './reducer';
import currentLocationReducer from './reducer';
import { FavouriteLocationsType, FAVOURITE_LOCATIONS_INITIAL_STATE } from './type';

describe('Test Suite for FavouriteLocations Store Reducer', () => {
  it('should return the cookie id and empty favourites array when initial state and action is undefined', () =>
    expect(favouriteLocationsReducer(undefined, {} as AnyAction)).toEqual(FAVOURITE_LOCATIONS_INITIAL_STATE));

  it('should init favourites list by adding information (that in real time comes from cookies)', () => {
    const locations: LocationWeatherInformation[] = [];
    const init = {
      type: FavouriteLocationsType.INIT_FAVOURITES,
      error: undefined,
      meta: undefined,
      payload: locations,
    };

    expect(favouriteLocationsReducer(FAVOURITE_LOCATIONS_INITIAL_STATE, init).favourites).toEqual(locations);
  });

  it('should update favourites by adding a location', () => {
    const location = {
      location: { city: 'city', country: 'country', lat: 0, lon: 0 },
      weather: {} as CurrentWeather,
    };

    const addFavouriteLocationAction = {
      type: FavouriteLocationsType.ADD_FAVOURITE,
      error: undefined,
      meta: undefined,
      payload: location,
    };
    expect(currentLocationReducer(FAVOURITE_LOCATIONS_INITIAL_STATE, addFavouriteLocationAction).favourites).toEqual([
      location,
    ]);
  });

  it('should update favourites by removing a location', () => {
    const location = {
      location: { city: 'city', country: 'country', lat: 0, lon: 0 },
      weather: {} as CurrentWeather,
    };

    const deleteFavouriteLocationAction = {
      type: FavouriteLocationsType.DELETE_FAVOURITE,
      error: undefined,
      meta: undefined,
      payload: location,
    };
    expect(currentLocationReducer(FAVOURITE_LOCATIONS_INITIAL_STATE, deleteFavouriteLocationAction).favourites).toEqual(
      [],
    );
  });
});
