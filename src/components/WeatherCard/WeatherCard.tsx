import React, { useState } from 'react';
import { WeatherCardContainer } from './WeatherCard.style';
import { FiPlusSquare } from 'react-icons/fi';
import { CurrentWeather } from '../../interfaces/current-weather';

type Props = {
  weather: CurrentWeather;
};

const WeatherCard = (props: Props) => {
  const { weather } = props;

  const renderWeatherCard = (): JSX.Element => {
    return (
      <>
        {Object.entries(weather).map((entry: [string, any], i: number) => {
          const label: string = entry[0].replace('_', ' ');
          const symbol: string = entry[0] === 'temperature' || entry[0] === 'feels_like' ? '\u00b0C' : '';

          return (
            <React.Fragment key={i}>
              <p>
                {label}:{' '}
                <span>
                  {entry[1]}
                  {symbol}
                </span>
              </p>
            </React.Fragment>
          );
        })}
      </>
    );
  };

  return <WeatherCardContainer>{renderWeatherCard()}</WeatherCardContainer>;
};

export default WeatherCard;
