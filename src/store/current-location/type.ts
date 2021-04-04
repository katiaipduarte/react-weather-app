import { Location } from '../../interfaces/location';

export const CurrentLocationType = {
  UPDATE_LOCATION: '@@CURRENT_LOCATION/UPDATE_LOCATION',
  UPDATE_GEO_LOCATION: '@@CURRENT_LOCATION/UPDATE_GEO_LOCATION',
};

export const CURRENT_LOCATION_INITIAL_STATE: Location = {
  city: 'Lisbon',
  country: 'Portugal',
  lat: 38.7259284,
  lon: -9.137382, //Original value: -9.137382,17 but since it's not reading the float it was rounded to -9.137382
};
