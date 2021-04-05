import React from 'react';
import { WeatherInfoContainer } from './CurrentWeatherInfo.style';
import { CurrentWeather } from '../../interfaces/current-weather';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  weather: CurrentWeather;
  country: string;
  city: string;
};

const CurrentWeatherInfo = (props: Props) => {
  const { weather, country, city } = props;
  const symbol = '\u00b0C';

  return (
    <WeatherInfoContainer>
      <h3>{country}</h3>
      <h2>{city}</h2>
      {weather.weather_icon !== '' && <FontAwesomeIcon icon={weather.weather_icon as IconProp} />}
      <h1> {`${weather.temperature} ${symbol}`}</h1>
      <p>{weather.date}</p>
    </WeatherInfoContainer>
  );
};

export default CurrentWeatherInfo;
