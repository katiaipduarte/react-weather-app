import { Location } from './location';
import { Temperature } from './temperature';

export type Weather = {
  city: string;
  country: string;
  coord: Location;
  temp: Temperature;
  description: string;
};
