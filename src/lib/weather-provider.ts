import { error } from 'node:console';
import { useSelector } from 'react-redux';
import { WeatherResponse } from '../interfaces/dto/weather-response';
import { Weather } from '../interfaces/weather';
import { GlobalState } from '../store/store';
import { handleRequest } from '../utils/handle-request';
import { mapToWeatherInterface } from '../utils/weather-mapper';

const WeatherProvider = () => {
  const baseUrl = process.env.REACT_APP_WEATHER_API_URL?.replace(/\/+$/, '');
  const currLocation = useSelector((state: GlobalState) => state.currentLocationState);

  const getWeatherByCoords = async (): Promise<Weather> => {
    return await fetch(
      `${baseUrl}/weather?lat=${currLocation.lat}&lon=${currLocation.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      {
        method: 'GET',
      },
    )
      .then((res: Response) => handleRequest(res))
      .then((weather: WeatherResponse) => {
        return mapToWeatherInterface(weather);
      });
    // .catch((err) => {
    //   console.error(err);
    //   return error;
    // });
  };

  const getForecastByCoords = async (): Promise<Weather> => {
    return await fetch(
      `${baseUrl}/forecast?lat=${currLocation.lat}&lon=${currLocation.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      {
        method: 'GET',
      },
    )
      .then((res) => handleRequest(res))
      .then((weather) => {
        console.log(weather);
        return weather;
      });
  };

  return {
    getWeatherByCoords,
  };
};

export default WeatherProvider;
