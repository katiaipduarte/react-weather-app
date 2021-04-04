import { action, PayloadAction } from 'typesafe-actions';
import { Location } from '../../interfaces/location';
import { CurrentLocationType } from './type';

export const updateCurrentGeoLocation = (location: Location): PayloadAction<string, Location> =>
  action(CurrentLocationType.UPDATE_GEO_LOCATION, location);

export const updateCurrentLocation = (location: Location): PayloadAction<string, Location> =>
  action(CurrentLocationType.UPDATE_LOCATION, location);
