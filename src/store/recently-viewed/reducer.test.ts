import { AnyAction } from 'redux';
import { CurrentWeather } from '../../interfaces/current-weather';
import favouriteLocationsReducer from './reducer';
import currentLocationReducer from './reducer';
import { RecentlyViewedType, RECENTLY_VIEWED_INITIAL_STATE } from './type';

describe('Test Suite for RecentlyViewed Store Reducer', () => {
  it('should return an empty viewed array when initial state and action is undefined', () =>
    expect(favouriteLocationsReducer(undefined, {} as AnyAction)).toEqual(RECENTLY_VIEWED_INITIAL_STATE));

  it('should update recently view list by adding a location', () => {
    const location = {
      location: { city: 'city', country: 'country', lat: 0, lon: 0 },
      weather: {} as CurrentWeather,
    };

    const updateRecentlyViewedAction = {
      type: RecentlyViewedType.ADD_NEW_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };
    expect(currentLocationReducer(RECENTLY_VIEWED_INITIAL_STATE, updateRecentlyViewedAction).viewed).toEqual([
      location,
    ]);
  });
});
