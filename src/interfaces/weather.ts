import { Temperature } from './temperature';

export type Weather = {
  location: string;
  temp: Temperature;
  description: string;
};
