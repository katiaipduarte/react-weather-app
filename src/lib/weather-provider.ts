import moment from 'moment';
import { error } from 'node:console';
import { useSelector } from 'react-redux';
import { WeatherResponse } from '../interfaces/dto/weather-response';
import { Weather } from '../interfaces/weather';
import { GlobalState } from '../store/store';
import { handleRequest } from '../utils/handle-request';
import { mapToWeatherInterface } from '../utils/weather-mapper';

const WeatherProvider = () => {
  const baseUrl = process.env.REACT_APP_WEATHER_API_URL?.replace(/\/+$/, '');
  const exclude = 'minutely,hourly,alerts';
  const currLocation = useSelector((state: GlobalState) => state.currentLocationState);

  const getWeather = async (): Promise<Weather> => {
    return await fetch(
      `${baseUrl}/onecall?lat=${currLocation.lat}&lon=${currLocation.lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
      {
        method: 'GET',
      },
    )
      .then((res) => handleRequest(res))
      .then((weather: WeatherResponse) => {
        return mapToWeatherInterface(weather);
      });
    // .catch((err) => {
    //   console.error(err);
    //   return error;
    // });;
  };

  return {
    getWeather,
  };
};

export default WeatherProvider;
