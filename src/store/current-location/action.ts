import { action, PayloadAction } from 'typesafe-actions';
import { Location } from '../../interfaces/location';
import { Weather } from '../../interfaces/weather';
import { CurrentLocationType } from './type';

export const updateCurrentGeoLocation = (location: Location): PayloadAction<string, Location> =>
  action(CurrentLocationType.UPDATE_GEO_LOCATION, location);

export const updateCurrentLocation = (location: Location): PayloadAction<string, Location> =>
  action(CurrentLocationType.UPDATE_LOCATION, location);

export const updateCurrentLocationWeather = (weather: Weather): PayloadAction<string, Weather> =>
  action(CurrentLocationType.UPDATE_WEATHER, weather);
