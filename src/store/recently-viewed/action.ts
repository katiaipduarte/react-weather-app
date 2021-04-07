import { action, PayloadAction } from 'typesafe-actions';
import { LocationWeatherInformation } from '../../interfaces/location-weather-info';
import { RecentlyViewedType } from './type';

export const recentlyViewed = (info: LocationWeatherInformation): PayloadAction<string, LocationWeatherInformation> =>
  action(RecentlyViewedType.ADD_NEW_LOCATION, info);
