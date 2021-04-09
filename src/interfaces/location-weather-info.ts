import { CurrentWeather } from './current-weather';
import { Location } from './location';

export type LocationWeatherInformation = {
  location: Location;
  weather: CurrentWeather;
};
