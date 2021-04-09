import { CurrentWeather } from '../../interfaces/current-weather';
import * as actions from './action';
import { CurrentLocationType } from './type';

describe('Test Suite for CurrentLocation Store Actions', () => {
  it('should create an action to update Current Geo Location', () => {
    const location = { city: '', country: '', lat: 10, lon: 10 };
    const expectAction = {
      type: CurrentLocationType.UPDATE_GEO_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    expect(actions.updateCurrentGeoLocation(location)).toEqual(expectAction);
  });

  it('should create an action to update Current Location', () => {
    const location = { city: 'city', country: 'country', lat: 0, lon: 0 };
    const expectAction = {
      type: CurrentLocationType.UPDATE_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    expect(actions.updateCurrentLocation(location)).toEqual(expectAction);
  });

  it('should create an action to update Current Location Weather', () => {
    const weather = {
      today: {} as CurrentWeather,
      forecast: [],
    };
    const expectAction = {
      type: CurrentLocationType.UPDATE_WEATHER,
      error: undefined,
      meta: undefined,
      payload: weather,
    };

    expect(actions.updateCurrentLocationWeather(weather)).toEqual(expectAction);
  });
});
