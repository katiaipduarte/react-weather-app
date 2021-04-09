import { Location } from '../../interfaces/location';
import { Weather } from '../../interfaces/weather';

export const CurrentLocationType = {
  UPDATE_LOCATION: '@@CURRENT_LOCATION/UPDATE_LOCATION',
  UPDATE_GEO_LOCATION: '@@CURRENT_LOCATION/UPDATE_GEO_LOCATION',
  UPDATE_WEATHER: '@@CURRENT_LOCATION/UPDATE_WEATHER',
};

export type CurrentLocation = {
  location: Location;
  weather: Weather;
};

export const CURRENT_LOCATION_INITIAL_STATE: CurrentLocation = {
  location: {
    city: 'Lisbon',
    country: 'Portugal',
    lat: 38.7259284,
    lon: -9.137382, //Original value: -9.137382,17 but since it's not reading the float it was rounded to -9.137382
  },
  weather: {} as Weather,
};
