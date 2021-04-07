import { LocationWeatherInformation } from '../../interfaces/location-weather-info';

export const RecentlyViewedType = {
  ADD_NEW_LOCATION: '@@RECENTLY_VIEWED/ADD_NEW_LOCATION',
};

export interface RecentlyViewed {
  viewed: LocationWeatherInformation[];
}

export const RECENTLY_VIEWED_INITIAL_STATE: RecentlyViewed = {
  viewed: [],
};
