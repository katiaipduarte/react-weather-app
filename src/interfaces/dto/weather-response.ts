import { Location } from '../location';
import { Temperature } from '../temperature';

export type WeatherResponse = {
  base: string;
  clouds: { all: string };
  cod: number;
  coord: Location;
  dt: number;
  id: number;
  main: Temperature;
  name: string;
  sys: SysDto;
  timezone: number;
  visibility: number;
  weather: WeatherDto[];
  wind: WindDto;
};

type WindDto = { speed: number; deg: number };

type SysDto = { type: number; id: number; country: string; sunrise: number; sunset: number };

type WeatherDto = { id: number; main: string; description: string; icon: string };
