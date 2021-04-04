import { WeatherDto } from './weather-dto';

export type CurrentDto = {
  clouds: number;
  dew_point: number;
  dt: number; //datetime in unix format
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number; //datetime in unix format
  sunset: number; //datetime in unix format
  temp: number;
  uvi: number;
  visibility: number;
  weather: WeatherDto[];
  wind_deg: number;
  wind_speed: number; //the wind speed is in m/s, to use km/h we need to multiply by 3.6
};
