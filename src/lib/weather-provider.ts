import { useSelector } from 'react-redux';
import { WeatherResponse } from '../interfaces/dto/weather-response';
import { Weather } from '../interfaces/weather';
import { handleRequest } from '../utils/handle-request';
import { mapToWeatherInterface } from '../utils/weather-mapper';

const WeatherProvider = () => {
  const baseUrl = process.env.REACT_APP_WEATHER_API_URL?.replace(/\/+$/, '');
  const exclude = 'minutely,hourly,alerts';

  const getWeather = async (lat: number, lon: number): Promise<Weather> => {
    return await fetch(
      `${baseUrl}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=${exclude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
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
    // });
  };

  return {
    getWeather,
  };
};

export default WeatherProvider;
