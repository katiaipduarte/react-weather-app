import { CurrentWeather } from '../../interfaces/current-weather';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import * as actions from './action';
import { FavouriteLocationsType } from './type';

describe('Test Suite for FavouriteLocations Store Actions', () => {
  it('should create an action to init favourites locations list', () => {
    const fav: LocationWeatherInformation[] = [];
    const expectAction = {
      type: FavouriteLocationsType.INIT_FAVOURITES,
      error: undefined,
      meta: undefined,
      payload: fav,
    };

    expect(actions.initFavouriteLocation(fav)).toEqual(expectAction);
  });

  it('should create an action to update Favourites Locations', () => {
    const fav = {
      location: { city: 'city', country: 'country', lat: 0, lon: 0 },
      weather: {} as CurrentWeather,
    };
    const expectAction = {
      type: FavouriteLocationsType.ADD_FAVOURITE,
      error: undefined,
      meta: undefined,
      payload: fav,
    };

    expect(actions.addFavouriteLocation(fav)).toEqual(expectAction);
  });

  it('should create an action to delete a Favourite Location', () => {
    const fav = {
      location: { city: 'city', country: 'country', lat: 0, lon: 0 },
      weather: {} as CurrentWeather,
    };
    const expectAction = {
      type: FavouriteLocationsType.DELETE_FAVOURITE,
      error: undefined,
      meta: undefined,
      payload: fav,
    };

    expect(actions.deleteFavouriteLocation(fav)).toEqual(expectAction);
  });
});
