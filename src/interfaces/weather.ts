import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

export type Weather = {
  today: CurrentWeather;
  forecast: Forecast[];
};
