import { WeatherResponse } from '../interfaces/dto/weather-response';
import { Weather } from '../interfaces/weather';

/**
 * Map response from API to custom Weather Interface
 * Current use case is for OpenWeatherMap
 * @param data WeatherResponse object received by the API used
 * @returns custom Weather object used through out the application
 */
export const mapToWeatherInterface = (data: WeatherResponse): Weather => {
  const mapped: Weather = {
    location: `${data.name}, ${data.sys.country}`,
    temp: data.main,
    description: data.weather.length === 0 ? 'No information' : data.weather[0].description,
  };

  return mapped;
};
