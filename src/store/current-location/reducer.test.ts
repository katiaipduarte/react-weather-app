import { AnyAction } from 'redux';
import { CurrentWeather } from '../../interfaces/current-weather';
import currentLocationReducer from './reducer';
import { CurrentLocationType, CURRENT_LOCATION_INITIAL_STATE } from './type';

describe('Test Suite for CurrentLocation Store Reducer', () => {
  it('should return default location and weather undefined when initial state and action is undefined', () =>
    expect(currentLocationReducer(undefined, {} as AnyAction)).toEqual(CURRENT_LOCATION_INITIAL_STATE));

  it('should update location by adding current geo location', () => {
    const location = { city: '', country: '', lat: 10, lon: 10 };
    const updateGeoLocationAction = {
      type: CurrentLocationType.UPDATE_GEO_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    const updatedLocation = {
      city: CURRENT_LOCATION_INITIAL_STATE.location.city,
      country: CURRENT_LOCATION_INITIAL_STATE.location.country,
      lat: location.lat,
      lon: location.lon,
    };

    expect(currentLocationReducer(CURRENT_LOCATION_INITIAL_STATE, updateGeoLocationAction).location).toEqual(
      updatedLocation,
    );
  });

  it('should update location by adding current location', () => {
    const location = { city: 'city', country: 'country', lat: 10, lon: 10 };
    const updateLocationAction = {
      type: CurrentLocationType.UPDATE_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    const updatedLocation = {
      city: location.city,
      country: location.country,
      lat: CURRENT_LOCATION_INITIAL_STATE.location.lat,
      lon: CURRENT_LOCATION_INITIAL_STATE.location.lon,
    };

    expect(currentLocationReducer(CURRENT_LOCATION_INITIAL_STATE, updateLocationAction).location).toEqual(
      updatedLocation,
    );
  });

  it('should update only update the city if the country is empty by adding current location', () => {
    const location = { city: 'city', country: '', lat: 10, lon: 10 };
    const updateLocationAction = {
      type: CurrentLocationType.UPDATE_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    const updatedLocation = {
      city: location.city,
      country: CURRENT_LOCATION_INITIAL_STATE.location.country,
      lat: CURRENT_LOCATION_INITIAL_STATE.location.lat,
      lon: CURRENT_LOCATION_INITIAL_STATE.location.lon,
    };

    expect(currentLocationReducer(CURRENT_LOCATION_INITIAL_STATE, updateLocationAction).location).toEqual(
      updatedLocation,
    );
  });

  it('should update only update the country if the city is empty by adding current location', () => {
    const location = { city: '', country: 'country', lat: 10, lon: 10 };
    const updateLocationAction = {
      type: CurrentLocationType.UPDATE_LOCATION,
      error: undefined,
      meta: undefined,
      payload: location,
    };

    const updatedLocation = {
      city: CURRENT_LOCATION_INITIAL_STATE.location.city,
      country: location.country,
      lat: CURRENT_LOCATION_INITIAL_STATE.location.lat,
      lon: CURRENT_LOCATION_INITIAL_STATE.location.lon,
    };

    expect(currentLocationReducer(CURRENT_LOCATION_INITIAL_STATE, updateLocationAction).location).toEqual(
      updatedLocation,
    );
  });

  it('should update weather for the current location', () => {
    const weather = {
      today: {} as CurrentWeather,
      forecast: [],
    };
    const updateLocationAction = {
      type: CurrentLocationType.UPDATE_WEATHER,
      error: undefined,
      meta: undefined,
      payload: weather,
    };

    expect(currentLocationReducer(CURRENT_LOCATION_INITIAL_STATE, updateLocationAction).weather).toEqual(weather);
  });
});
