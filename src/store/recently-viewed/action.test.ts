import { CurrentWeather } from '../../interfaces/current-weather';
import * as actions from './action';
import { RecentlyViewedType } from './type';

describe('Test Suite for RecentlyViewed Store Actions', () => {
  it('should create an action to update recently viewed list', () => {
    const location = {
      location: { city: 'city', country: 'country', lat: 0, lon: 0 },
      weather: {} as CurrentWeather,
    };
    const expectAction = {
      type: RecentlyViewedType.ADD_NEW_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    expect(actions.recentlyViewed(location)).toEqual(expectAction);
  });
});
