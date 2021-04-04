import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

export type Weather = {
  location: string;
  today: CurrentWeather;
  forecast: Forecast[];
};
