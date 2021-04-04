import { CurrentDto } from './current-dto';
import { DailyDto } from './daily-dto';

export type WeatherResponse = {
  current: CurrentDto;
  daily: DailyDto[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};
