import moment from 'moment';
import { CurrentWeather } from '../interfaces/current-weather';
import { CurrentDto } from '../interfaces/dto/current-dto';
import { DailyDto } from '../interfaces/dto/daily-dto';
import { WeatherResponse } from '../interfaces/dto/weather-response';
import { Forecast } from '../interfaces/forecast';
import { Weather } from '../interfaces/weather';

/**
 * Map response from API to custom Weather Interface
 * Current use case is for OpenWeatherMap
 * @param data WeatherResponse object received by the API used
 * @returns custom Weather object used through out the application
 */
export const mapToWeatherInterface = (data: WeatherResponse): Weather => {
  const mapped: Weather = {
    location: '',
    today: convertToCurrentWeather(data.current),
    forecast: convertToForecast(data.daily),
  };

  return mapped;
};

const convertToCurrentWeather = (data: CurrentDto): CurrentWeather => {
  return {
    date: moment.unix(data.dt).format('LL'),
    temperature: Math.round(data.temp),
    feels_like: Math.round(data.feels_like),
    weather_icon: data.weather.length === 0 ? '' : getWeatherIcon(data.weather[0].main),
    weather_description: data.weather.length === 0 ? '' : data.weather[0].description,
    humidity: `${data.humidity}%`,
    wind: `${findWindDirection(data.wind_deg)} ${Math.round(data.wind_speed * 3.6)} km/h`,
  };
};

const convertToForecast = (data: DailyDto[]): Forecast[] => {
  const forecast: Forecast[] = [];

  data.map((obj: DailyDto) => {
    forecast.push({
      day: moment.unix(obj.dt).isSame(moment(), 'day') ? 'Today' : moment.unix(obj.dt).format('dddd'),
      weather_icon: obj.weather.length === 0 ? '' : getWeatherIcon(obj.weather[0].main),
      weather_description: obj.weather.length === 0 ? '' : obj.weather[0].description,
      temp_min: Math.round(obj.temp.min),
      temp_max: Math.round(obj.temp.max),
    });
  });

  return forecast;
};

const findWindDirection = (deg: number): string => {
  let direction = '';

  switch (true) {
    case (deg >= 0 && deg < 30) || deg === 360:
      direction = 'N';
      break;
    case deg >= 30 && deg < 60:
      direction = 'NE';
      break;
    case deg >= 60 && deg < 120:
      direction = 'E';
      break;
    case deg >= 120 && deg < 150:
      direction = 'ES';
      break;
    case deg >= 150 && deg < 210:
      direction = 'S';
      break;
    case deg >= 210 && deg < 240:
      direction = 'SW';
      break;
    case deg >= 240 && deg < 300:
      direction = 'W';
      break;
    case deg >= 300 && deg < 330:
      direction = 'NW';
      break;
    default:
      break;
  }

  return direction;
};

const getWeatherIcon = (description: string): string => {
  let weatherIcon = '';

  switch (description) {
    case 'Thunderstorm':
      weatherIcon = 'bolt';
      break;
    case 'Drizzle':
      weatherIcon = 'cloud-rain';
      break;
    case 'Rain':
      weatherIcon = 'cloud-showers-heavy';
      break;
    case 'Snow':
      weatherIcon = 'snowflake';
      break;
    case 'Clear':
      weatherIcon = 'sun';
      break;
    case 'Clouds':
      weatherIcon = 'cloud';
      break;
    case 'Smoke':
    case 'Fog':
    case 'Mist':
    case 'Haze':
    case 'Dust':
      weatherIcon = 'smog';
      break;
    default:
      break;
  }

  return weatherIcon;
};
