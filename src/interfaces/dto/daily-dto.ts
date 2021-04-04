import { FeelsDto } from './feels-dto';
import { TemperatureDto } from './temperature-dto';
import { WeatherDto } from './weather-dto';

export type DailyDto = {
  clouds: number;
  dew_point: number;
  dt: number; //datetime in unix format
  feels_like: FeelsDto;
  humidity: number;
  pop: number;
  pressure: number;
  sunrise: number; //datetime in unix format
  sunset: number; //datetime in unix format
  temp: TemperatureDto;
  uvi: number;
  weather: WeatherDto[];
  wind_deg: number;
  wind_speed: number; //the wind speed is in m/s, to use km/h we need to multiply by 3.6
};
