import React from 'react';
import { WeatherInfoContainer } from './CurrentWeatherInfo.style';
import { CurrentWeather } from '../../interfaces/current-weather';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalState } from '../../store/store';
import { useSelector } from 'react-redux';

type Props = {
  weather: CurrentWeather;
};

const CurrentWeatherInfo = (props: Props) => {
  const { weather } = props;
  const currLocation = useSelector((state: GlobalState) => state.currentLocationState);
  const symbol = '\u00b0C';

  return (
    <WeatherInfoContainer>
      <h3>{currLocation.country}</h3>
      <h2>{currLocation.city}</h2>
      {weather.weather_icon !== '' && <FontAwesomeIcon icon={weather.weather_icon as IconProp} />}
      <h1> {`${weather.temperature} ${symbol}`}</h1>
      <p>{weather.date}</p>
    </WeatherInfoContainer>
  );
};

export default CurrentWeatherInfo;
